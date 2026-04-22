/* Infoscience MAP widget — tooltip position:fixed, modal appended to body */
(function(){
'use strict';
const $=id=>document.getElementById(id);

const UI={
  en:{search:'Search field or label\u2026',all_coll:'All collections',all_props:'All',
      req_only:'Required',opt_only:'Optional',tb_only:'Type-bound',
      lvl_all:'All levels',lvl_item:'Item level',lvl_file:'File level',
      hdr_key:'Metadata key',hdr_label:'Label',hdr_level:'Level',
      hdr_it:'Input type',hdr_props:'Properties',hdr_auth:'Authority',hdr_voc:'Vocabulary',
      lvl_item_lbl:'item',lvl_file_lbl:'file',
      req_lbl:'required',rep_lbl:'repeatable',tb_lbl:'type-bound',
      auth_resolves:'\u2192',rows:'fields',
      modal_title:'Vocabulary values',modal_close:'\u00d7',
      virt_title:'Virtual metadata',
      virt_desc:'These fields are filled in automatically based on information already recorded in the profiles of linked researchers, units, or other entities in Infoscience. They cannot be edited directly — they reflect the current state of those profiles and update accordingly.',
      virt_hdr_field:'Virtual field',virt_hdr_entities:'Source entities',
      virt_hdr_trigger:'Trigger field(s)',virt_hdr_fetched:'Fetched from',virt_hdr_desc:'Description',
      loading:'Loading\u2026',no_results:'No fields match the current filters.'},
  fr:{search:'Rechercher un champ ou un label\u2026',all_coll:'Toutes collections',all_props:'Tous',
      req_only:'Obligatoires',opt_only:'Optionnels',tb_only:'Type-bind',
      lvl_all:'Tous niveaux',lvl_item:'Niveau notice',lvl_file:'Niveau fichier',
      hdr_key:'Cl\u00e9 de m\u00e9tadonn\u00e9e',hdr_label:'Label',hdr_level:'Niveau',
      hdr_it:'Type saisie',hdr_props:'Propri\u00e9t\u00e9s',hdr_auth:'Autorit\u00e9',hdr_voc:'Vocabulaire',
      lvl_item_lbl:'notice',lvl_file_lbl:'fichier',
      req_lbl:'obligatoire',rep_lbl:'r\u00e9p\u00e9table',tb_lbl:'type-bind',
      auth_resolves:'\u2192',rows:'champs',
      modal_title:'Valeurs du vocabulaire',modal_close:'\u00d7',
      virt_title:'Métadonnées virtuelles',
      virt_desc:'Ces champs sont renseignés automatiquement à partir des informations déjà saisies dans les profils des chercheurs, unités ou autres entités liées dans Infoscience. Ils ne peuvent pas être modifiés directement\u00a0: ils reflètent l\u2019état actuel de ces profils et se mettent à jour en conséquence.',
      virt_hdr_field:'Champ virtuel',virt_hdr_entities:'Entit\u00e9s source',
      virt_hdr_trigger:'D\u00e9clencheur(s)',virt_hdr_fetched:'Extrait de',virt_hdr_desc:'Description',
      loading:'Chargement\u2026',no_results:'Aucun champ ne correspond aux filtres.'},
};

const IT={onebox:'text',textarea:'textarea',dropdown:'dropdown',date:'date',
  name:'name',tag:'tags',list:'list','inline-group':'inline group',
  group:'group',series:'series',qualdrop_value:'qualified value',
  opendropdown:'open dropdown','virtual (computed)':'virtual'};

function lang(){
  const el=document.getElementById('infoscience-map');
  if(el&&el.dataset.lang) return el.dataset.lang==='fr'?'fr':'en';
  if(window.location.pathname.includes('/fr/')) return 'fr';
  return(document.documentElement.lang||'en').startsWith('fr')?'fr':'en';
}
function L(){return UI[lang()];}
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

// ── Tooltip (position:fixed, appended to body) ──────────────────────────────
let tooltip=null;
function ensureTooltip(){
  if(!tooltip){
    tooltip=document.createElement('div');
    tooltip.id='map-tooltip';
    document.body.appendChild(tooltip);
  }
  return tooltip;
}
function showTooltip(e, field, desc, hint){
  const t=ensureTooltip();
  let html=`<strong>${esc(field)}</strong>`;
  if(desc) html+=`<div>${esc(desc)}</div>`;
  if(hint) html+=`<div class="tip-hint">${esc(hint)}</div>`;
  t.innerHTML=html;
  t.style.display='block';
  positionTooltip(e);
}
function positionTooltip(e){
  if(!tooltip||tooltip.style.display==='none') return;
  const GAP=12, TW=tooltip.offsetWidth||260, TH=tooltip.offsetHeight||60;
  const vw=window.innerWidth, vh=window.innerHeight;
  let x=e.clientX+GAP, y=e.clientY+GAP;
  if(x+TW>vw-8) x=e.clientX-TW-GAP;
  if(y+TH>vh-8) y=e.clientY-TH-GAP;
  tooltip.style.left=Math.max(8,x)+'px';
  tooltip.style.top=Math.max(8,y)+'px';
}
function hideTooltip(){
  if(tooltip) tooltip.style.display='none';
}

// ── Modal (position:fixed, appended to body) ────────────────────────────────
let modalEl=null;
function ensureModal(){
  if(!modalEl){
    modalEl=document.createElement('div');
    modalEl.id='map-modal-overlay';
    modalEl.className='';
    document.body.appendChild(modalEl);
    modalEl.addEventListener('click',e=>{if(e.target===modalEl) closeModal();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape') closeModal();});
  }
  return modalEl;
}
function openModal(vocName, valsEnJSON, valsFrJSON){
  const valsEn=typeof valsEnJSON==='string'?JSON.parse(valsEnJSON):valsEnJSON;
  const valsFr=typeof valsFrJSON==='string'?JSON.parse(valsFrJSON):valsFrJSON;
  const Lc=L(); const isEn=lang()==='en';
  const display=(!isEn&&valsFr&&valsFr.length)?valsFr:valsEn;
  const alt=isEn?valsFr:valsEn;
  const m=ensureModal();
  let html=`<div class="map-modal">
    <div class="map-modal-hdr">
      <div>
        <div class="map-modal-title">${esc(Lc.modal_title)}</div>
        <div class="map-modal-voc">${esc(vocName)}</div>
      </div>
      <button class="map-modal-close" onclick="MAPcloseModal()" aria-label="close">&times;</button>
    </div>
    <div class="map-voc-grid">`;
  (display||[]).forEach((p,i)=>{
    const a=(alt&&alt[i]&&alt[i].d&&alt[i].d!==p.d)?` <span class="map-voc-alt">${esc(alt[i].d)}</span>`:'';
    html+=`<div class="map-voc-pair">
      <span class="map-voc-key">${esc(p.s)}</span>
      <span class="map-voc-lbl">${esc(p.d)}${a}</span>
    </div>`;
  });
  html+=`</div></div>`;
  m.innerHTML=html;
  m.style.cssText='display:flex;position:fixed;inset:0;z-index:9998;background:rgba(0,0,0,.4);align-items:center;justify-content:center;padding:20px';
}
window.MAPcloseModal=()=>{if(modalEl) modalEl.style.display='none';};
window.openModal=openModal;

// ── State ─────────────────────────────────────────────────────────────────────
let DATA=null, activeEntity=null, expanded=new Set(), sortCol=null, sortDir='asc';

// ── Rendering helpers ─────────────────────────────────────────────────────────
function bReq(){return`<span class="map-b map-b-req">${esc(L().req_lbl)}</span>`;}
function bRep(){return`<span class="map-b map-b-rep">${esc(L().rep_lbl)}</span>`;}
function bTb() {return`<span class="map-b map-b-tb">${esc(L().tb_lbl)}</span>`;}
function mono(s){return`<code class="map-code">${esc(s)}</code>`;}

function cellKey(row, sub=false, last=false){
  const desc=(lang()==='fr'?row.description_fr:row.description_en)||row.description_en||'';
  const hint=row.hint_en||'';
  const hasExpand=(row.is_group||row.is_qualdrop)&&((row.sub_fields||[]).length||(row.qualdrop_subs||[]).length);
  const expKey=row.field+(row.entity||'');
  const isExp=expanded.has(expKey);
  let h='<div class="map-key-wrap">';
  if(sub) h+=`<span class="map-tree">${last?'└─':'├─'}</span>`;
  h+=`<div class="map-key-inner">`;
  h+=`<span class="map-code" data-field="${esc(row.field)}" data-desc="${esc(desc)}" data-hint="${esc(hint)}">${esc(row.field)}</span>`;
  h+=`</div>`;
  if(hasExpand) h+=`<button class="map-expand-btn" data-expkey="${esc(expKey)}">${isExp?'▲':'▼'}</button>`;
  h+=`</div>`;
  return h;
}

function cellLabel(row){
  return esc(lang()==='fr'?row.label_fr:row.label_en);
}

function cellLevel(row){
  const Lc=L();
  const isFile=row.level==='file';
  return`<span class="map-lvl ${isFile?'map-lvl-file':'map-lvl-item'}">${isFile?Lc.lvl_file_lbl:Lc.lvl_item_lbl}</span>`;
}

function cellIt(row){
  const label=IT[row.input_type]||row.input_type;
  const cls=['group','inline-group','series'].includes(row.input_type)?'map-it map-it-group':
             row.input_type==='virtual (computed)'?'map-it map-it-virtual':'map-it';
  return`<span class="${cls}">${esc(label)}</span>`;
}

function cellProps(row){
  const parts=[];
  if(row.required) parts.push(bReq());
  if(row.repeatable) parts.push(bRep());
  if(!row.type_bind_all&&(row.type_bind_ihm_en||[]).length) parts.push(bTb());
  if(!parts.length) parts.push(`<span class="map-opt">opt.</span>`);
  return`<div class="map-props">${parts.join('')}</div>`;
}

function cellAuth(row){
  const a=row.authority; if(!a||!a.plugin) return'';
  const Lc=L();
  let h=`<div class="map-auth"><span class="map-auth-plugin">${esc(a.plugin)}</span>`;
  if(a.resolves_to) h+=`<span class="map-auth-arrow"> ${Lc.auth_resolves} </span><span class="map-b-entity">${esc(a.resolves_to)}</span>`;
  if(a.external_source) h+=`<span class="map-b-src">${esc(a.external_source)}</span>`;
  h+=`</div>`; return h;
}

function cellVoc(row){
  const voc=row.vocabulary;
  const valsEn=row.vocabulary_values_en||[];
  const valsFr=row.vocabulary_values_fr||[];
  if(!voc) return`<span class="map-voc-none">—</span>`;
  const isCOAR=voc.includes('coar-types')||voc==='oecd';
  if(!valsEn.length) return`<span class="${isCOAR?'map-voc-ext':'map-voc-none'}">${esc(voc)}</span>`;
  const safeEn=esc(JSON.stringify(valsEn));
  const safeFr=esc(JSON.stringify(valsFr));
  return`<button class="map-voc-btn" onclick="openModal('${esc(voc)}','${safeEn}','${safeFr}')">${esc(voc)} <span style="opacity:.6;font-weight:400">(${valsEn.length})</span></button>`;
}

function rowHtml(row, sub=false, last=false){
  const cls='map-row'+(!sub&&row.is_group?' map-row-group':'')+(sub?' map-row-sub':'')+(sub&&last?' map-row-sub-last':'')+(row.level==='file'?' map-row-file':'');
  return`<tr class="${cls}">
    <td>${cellKey(row,sub,last)}</td>
    <td>${cellLabel(row)}</td>
    <td>${sub?'':cellLevel(row)}</td>
    <td>${cellIt(row)}</td>
    <td>${sub?'':cellProps(row)}</td>
    <td>${cellAuth(row)}</td>
    <td>${cellVoc(row)}</td>
  </tr>`;
}

// ── Filter + build tbody ──────────────────────────────────────────────────────
function filters(){
  return{
    q:($('map-search')?.value||'').toLowerCase().trim(),
    coll:$('map-filter-coll')?.value||'',
    props:$('map-filter-props')?.value||'',
    level:$('map-filter-level')?.value||'',
  };
}
function matches(row,f){
  const label=(lang()==='fr'?row.label_fr:row.label_en)||'';
  if(f.q){
    const txt=(row.field+' '+label+' '+(row.description_en||'')+' '+(row.hint_en||'')).toLowerCase();
    if(!txt.includes(f.q)) return false;
  }
  if(activeEntity&&row.entity!==activeEntity&&!String(row.entity).includes(activeEntity)) return false;
  if(f.coll&&!(row.collections_en||[]).includes(f.coll)) return false;
  if(f.props==='req'&&!row.required) return false;
  if(f.props==='opt'&&row.required) return false;
  if(f.props==='tb'&&(row.type_bind_all||!(row.type_bind_ihm_en||[]).length)) return false;
  if(f.level==='item'&&row.level!=='item') return false;
  if(f.level==='file'&&row.level!=='file') return false;
  return true;
}

function render(){
  if(!DATA) return;
  const f=filters();
  const all=[...(DATA.item_rows||[]),...(DATA.file_rows||[])];
  const visible=all.filter(r=>matches(r,f));
  const tbody=$('map-tbody'); if(!tbody) return;
  if(!visible.length){
    tbody.innerHTML=`<tr class="map-empty"><td colspan="7">${esc(L().no_results)}</td></tr>`;
  } else {
    const parts=[];
    visible.forEach(row=>{
      parts.push(rowHtml(row));
      const expKey=row.field+(row.entity||'');
      if(expanded.has(expKey)){
        const subs=row.sub_fields||[];
        const qdSubs=row.qualdrop_subs||[];
        subs.forEach((sf,i)=>parts.push(rowHtml({...sf,level:row.level,entity:row.entity,entity_color:row.entity_color,is_group:false,is_qualdrop:false,type_bind_all:true,type_bind_ihm_en:[]},true,i===subs.length-1&&!qdSubs.length)));
        qdSubs.forEach((qs,i)=>parts.push(rowHtml({...qs,level:row.level,entity:row.entity,entity_color:row.entity_color,is_group:false,is_qualdrop:false,required:false,repeatable:true,type_bind_all:true,type_bind_ihm_en:[],vocabulary:'',vocabulary_values_en:[],vocabulary_values_fr:[]},true,i===qdSubs.length-1)));
      }
    });
    tbody.innerHTML=parts.join('');
  }
  const vc=$('map-vis-count'); if(vc) vc.textContent=visible.length;

  // Tooltip events on .map-code elements
  tbody.querySelectorAll('.map-code').forEach(el=>{
    el.addEventListener('mouseenter',e=>{
      const d=el.dataset; showTooltip(e,d.field,d.desc,d.hint);
    });
    el.addEventListener('mousemove',positionTooltip);
    el.addEventListener('mouseleave',hideTooltip);
  });

  // Expand toggles
  tbody.querySelectorAll('.map-expand-btn').forEach(btn=>{
    btn.addEventListener('click',e=>{
      e.stopPropagation();
      const k=btn.dataset.expkey;
      expanded.has(k)?expanded.delete(k):expanded.add(k);
      render();
    });
  });
}

// ── Entity buttons ────────────────────────────────────────────────────────────
function buildEntityBtns(){
  if(!DATA) return;
  const bar=$('map-entity-bar'); if(!bar) return;
  const meta=DATA.metadata.entity_meta;
  const order=DATA.metadata.entity_order;
  bar.innerHTML='';
  const mkBtn=(text,color,active,onClick)=>{
    const b=document.createElement('button');
    b.className='map-ent-btn'+(active?' active':activeEntity&&!active?' inactive':'');
    b.textContent=text; b.style.borderColor=color; b.style.color=active?'#fff':color;
    b.style.background=active?color:color+'15'; b.onclick=onClick; return b;
  };
  bar.appendChild(mkBtn('All','#888',!activeEntity,()=>{activeEntity=null;buildEntityBtns();render();}));
  order.forEach(eid=>{
    const em=meta[eid]; const c=em.color;
    const lbl=lang()==='fr'?em.label_fr:em.label_en;
    bar.appendChild(mkBtn(lbl,c,activeEntity===eid,()=>{
      activeEntity=activeEntity===eid?null:eid; buildEntityBtns(); render();
    }));
  });
}

// ── Collection select ─────────────────────────────────────────────────────────
function buildCollSelect(){
  if(!DATA) return;
  const sel=$('map-filter-coll'); if(!sel) return;
  const Lc=L(); const colls=DATA.metadata.all_collections||[];
  sel.innerHTML=`<option value="">${esc(Lc.all_coll)}</option>`+
    colls.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('');
}

// ── Sort ──────────────────────────────────────────────────────────────────────
function attachSort(){
  const COL_KEY={key:'field',label:'label_en',level:'level',it:'input_type',props:'required',auth:'',voc:'vocabulary'};
  document.querySelectorAll('#infoscience-map th[data-col]').forEach(th=>{
    th.addEventListener('click',()=>{
      const col=th.dataset.col; const key=COL_KEY[col]; if(!key) return;
      sortDir=(sortCol===col&&sortDir==='asc')?'desc':'asc'; sortCol=col;
      document.querySelectorAll('#infoscience-map th').forEach(h=>h.classList.remove('sort-asc','sort-desc'));
      th.classList.add(sortDir==='asc'?'sort-asc':'sort-desc');
      const cmp=(a,b)=>{
        const va=String(a[key]??'').toLowerCase(), vb=String(b[key]??'').toLowerCase();
        return sortDir==='asc'?va.localeCompare(vb):vb.localeCompare(va);
      };
      DATA.item_rows=[...DATA.item_rows].sort(cmp);
      DATA.file_rows=[...DATA.file_rows].sort(cmp);
      render();
    });
  });
}

// ── Virtual table ─────────────────────────────────────────────────────────────
function renderVirtual(){
  if(!DATA) return;
  const Lc=L(); const virt=DATA.virtual_rows||[];
  const sec=$('map-virt-section'); if(!sec) return;
  let h=`<div class="map-virt-title">${esc(Lc.virt_title)}</div>
    <p class="map-virt-desc">${esc(Lc.virt_desc)}</p>
    <div class="map-tbl-wrap"><table class="map-virt-tbl">
    <thead><tr>
      <th style="width:22%">${esc(Lc.virt_hdr_field)}</th>
      <th style="width:16%">${esc(Lc.virt_hdr_entities)}</th>
      <th style="width:22%">${esc(Lc.virt_hdr_trigger)}</th>
      <th style="width:22%">${esc(Lc.virt_hdr_fetched)}</th>
      <th>${esc(Lc.virt_hdr_desc)}</th>
    </tr></thead><tbody>`;
  virt.forEach(v=>{
    const desc=(lang()==='fr'?v.description_fr:v.description_en)||v.description_en||'';
    h+=`<tr>
      <td><span class="map-virt-field">${esc(v.field)}</span></td>
      <td style="font-size:.61rem;color:var(--md-default-fg-color--light)">${esc(v.source_entities_str)}</td>
      <td>${(v.trigger_fields||[]).map(f=>`<span class="map-virt-chip">${esc(f)}</span>`).join(' ')}</td>
      <td>${(v.fetched_from||[]).map(f=>`<span class="map-virt-chip">${esc(f)}</span>`).join(' ')}</td>
      <td style="font-size:.61rem;color:var(--md-default-fg-color--light)">${esc(desc)}</td>
    </tr>`;
  });
  h+=`</tbody></table></div>`; sec.innerHTML=h;
}

// ── Shell + init ──────────────────────────────────────────────────────────────
function buildShell(){
  const Lc=L(); const root=$('infoscience-map'); if(!root) return;
  root.innerHTML=`
<div id="map-entity-bar" class="map-entity-bar"></div>
<div class="map-toolbar">
  <input id="map-search" type="text" placeholder="${esc(Lc.search)}">
  <select id="map-filter-coll"></select>
  <select id="map-filter-props">
    <option value="">${esc(Lc.all_props)}</option>
    <option value="req">${esc(Lc.req_only)}</option>
    <option value="opt">${esc(Lc.opt_only)}</option>
    <option value="tb">${esc(Lc.tb_only)}</option>
  </select>
  <select id="map-filter-level">
    <option value="">${esc(Lc.lvl_all)}</option>
    <option value="item">${esc(Lc.lvl_item)}</option>
    <option value="file">${esc(Lc.lvl_file)}</option>
  </select>
</div>
<div class="map-count"><span id="map-vis-count">—</span> ${esc(Lc.rows)}</div>
<div class="map-tbl-wrap">
  <table class="map-tbl">
    <thead><tr>
      <th class="col-key"  data-col="key"  >${esc(Lc.hdr_key)}</th>
      <th class="col-label"data-col="label">${esc(Lc.hdr_label)}</th>
      <th class="col-level"data-col="level">${esc(Lc.hdr_level)}</th>
      <th class="col-it"   data-col="it"   >${esc(Lc.hdr_it)}</th>
      <th class="col-props"data-col="props">${esc(Lc.hdr_props)}</th>
      <th class="col-auth"               >${esc(Lc.hdr_auth)}</th>
      <th class="col-voc"  data-col="voc" >${esc(Lc.hdr_voc)}</th>
    </tr></thead>
    <tbody id="map-tbody"></tbody>
  </table>
</div>
<div id="map-virt-section" class="map-virt-section"></div>`;

  ['map-search','map-filter-coll','map-filter-props','map-filter-level'].forEach(id=>{
    const el=$(id); if(el) el.addEventListener(id==='map-search'?'input':'change',render);
  });
}

function init(){
  const root=$('infoscience-map'); if(!root) return;
  root.innerHTML=`<p class="map-loading">${esc(L().loading)}</p>`;
  const scriptEl=document.querySelector('script[src*="metadata-profile.js"]');
  const base=scriptEl?scriptEl.src:'';
  const dataPath=base?base.replace(/metadata-profile\.js(\?.*)?$/,'metadata-profile-data.json'):'metadata-profile-data.json';
  fetch(dataPath)
    .then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.json();})
    .then(data=>{
      DATA=data;
      // Default sort: metadata key ascending
      const byField=(a,b)=>a.field.localeCompare(b.field);
      DATA.item_rows=[...DATA.item_rows].sort(byField);
      DATA.file_rows=[...DATA.file_rows].sort(byField);
      buildShell();
      buildEntityBtns();
      buildCollSelect();
      attachSort();
      // Mark default sort column
      const defTh=document.querySelector('#infoscience-map th[data-col="key"]');
      if(defTh){sortCol='key';sortDir='asc';defTh.classList.add('sort-asc');}
      render();
      renderVirtual();
    })
    .catch(err=>{root.innerHTML=`<p style="color:var(--md-typeset-color)">Error loading data: ${esc(err.message)}</p>`;});
}

if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
else init();
})();
