/* =====================================================================
   ALAG PERSPECTIVE ARCHITECTS – SITE CONTENT
   Projects and the consultation planner live here. Keep the quotes and commas.

   PROJECTS
   - The order here is the order on the site.
   - A project only appears on the site once its main photo exists:
       images/<slug>-1.jpg   (plus -2.jpg and -3.jpg for the case study)
   - To add a project: copy one { ... }, block, paste it, change the text
     and give it a new slug (lower case, dashes, no spaces).
   ===================================================================== */

const P=[
 {title:"The Architect's Home",slug:'architects-home',cat:'Homes',loc:'Nagpur',hook:'Our own home, where warm teak meets quiet grey.',
  facts:[['Type','Family home'],['Scope','Architecture · interiors'],['Photographed','2024']],
  c:'A family home that stays calm and easy to live in, and that also works as a test bed for the materials we use in client projects.',
  r:'Teak joinery against white walls and grey floors, upholstered headboards washed with cove light, a fluted-glass partition that brings daylight into the living room, and a study wall of open shelves on black steel uprights.',
  o:'A home that feels warm and modern at the same time.',m:['Living room with fluted-glass partition','Master bedroom headboard with cove light','Study with teak shelves on black steel'],
  video:['videos/home-master-bedroom.mp4','videos/home-wardrobe.mp4','videos/home-guest-bedroom.mp4']},
 {title:'Bliss',slug:'bliss',cat:'Interiors',loc:'Nagpur',hook:'A honeycomb timber ceiling and a bird-motif metal screen.',
  facts:[['Type','Interior'],['Scope','Interiors · joinery · metalwork'],['Years','2025–26']],
  c:'A space that needed one memorable feature without feeling busy.',
  r:'A hexagonal ceiling in timber slats framing the view, and a tall metal grille with a bird motif screening an indoor planter.',
  o:'Two crafted pieces that give the space its character.',m:['Hexagonal slatted ceiling','Bird-motif grille over the planter','Ceiling layout']},
 {title:'Rise',slug:'rise',cat:'Commercial',loc:'Nagpur',hook:'An office lit softly from the ceiling.',
  facts:[['Type','Office fit-out'],['Scope','Interiors · services'],['Years','2025–26']],
  c:'An office that needed good light and neat services without a cluttered ceiling.',
  r:'A layered false ceiling with concealed cove lighting, with fire-safety fittings coordinated into the ceiling grid.',
  o:'A calm, well-lit workplace.',m:['Cove-lit ceiling','Reflected ceiling plan','Workstations']},
 {title:'Office Interiors',slug:'office-interiors',cat:'Commercial',loc:'Nagpur',hook:'Workplaces planned around how teams actually move.',
  facts:[['Type','Workplace interiors'],['Scope','Space planning · interiors'],['Years','2025–26']],
  c:'Growing teams that needed clear circulation, practical storage and finishes that hold up to daily use.',
  r:'We started from the plan: who sits where, who meets whom and where storage goes, then layered in lighting, joinery and durable finishes.',
  o:'Calm, organised workplaces that are easy to keep tidy.',m:['Work area','Reception','Meeting room']},
];
P.forEach(p=>{if(!p.slug)p.slug=p.title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")});

/* PLANNER: stages and typical weeks shown in the consultation form
   [label, 'fixed text']  or  [label, [min weeks, max weeks]] (scaled by area) */
const PLAN={
 home:{t:'New home',st:[['Consultation','1 week'],['Concept & 3D',[3,5]],['Drawings & sanction',[4,8]],['Construction',[40,70]],['Handover','2 weeks']],
   need:['Plot papers or the layout plan','A rough budget range','Who will live there, including elders or kids','Photos of the plot and the road','Homes you like (Instagram saves are fine)']},
 interiors:{t:'Interiors',st:[['Consultation','1 week'],['Layout & materials',[2,4]],['Joinery drawings',[2,3]],['Execution',[8,20]],['Styling & handover','1–2 weeks']],
   need:['Floor plan (a builder brochure is fine)','A rough budget range','Rooms to do first','Furniture you want to keep','Photos of spaces you like']},
 commercial:{t:'Commercial',st:[['Consultation','1 week'],['Concept & layout',[2,5]],['Drawings & approvals',[3,8]],['Execution',[10,40]],['Handover','1–2 weeks']],
   need:['Site plan or lease drawings','Business type and daily operations','Your target opening date','Brand colours or logo, if any','A rough budget range']}};
