/* =====================================================================
   ALAG PERSPECTIVE ARCHITECTS – SITE CONTENT
   Edit projects and the planner here. Keep the quotes and commas.
   To add a project: copy one { ... }, block, paste it, change the text.
   ===================================================================== */

const P=[
 {title:'Bungalow for Mr. Sakharwade',cat:'Homes',loc:'National Highway, Nagpur region',hook:'A calm family home on a busy highway site.',
  facts:[['Type','Bungalow'],['Scope','Architecture'],['Site','Large plot on the highway']],
  c:'A large stretch of land right on the National Highway, with constant traffic noise and dust.',
  r:'We planned a buffer between the house and the road so living spaces sit away from the traffic. The client, an interior designer, shaped the design with us.',
  o:'A bungalow that feels private and quiet despite its location.',m:['Approach from the highway side','Living spaces away from the road','Site plan showing the buffer']},
 {title:'Mixed-use Residence for Mr. Kapate',cat:'Commercial',loc:'Nagpur',hook:'Business below, family above, connected inside.',
  facts:[['Type','Mixed-use'],['Scope','Architecture'],['Use','Office + residence']],
  c:'A growing family and a growing business, with a vacant plot next to the existing home.',
  r:'Office and storage on the ground floor and the residence from the first floor up, with internal connections to the second floor.',
  o:'One building where the family can work and live side by side, with room to grow.',m:['Street elevation','Ground and first floor plans','Residential floor']},
 {title:'Residence for Mr. Tembhurkar',cat:'Homes',loc:'Outskirts of Nagpur',hook:'A peaceful retirement home, built to last and to budget.',
  facts:[['Type','Independent house'],['Scope','Architecture'],['Setting','New residential society']],
  c:'A retirement home for a client in government service, on a fixed budget, in an upcoming society.',
  r:'A simple, durable plan with easy maintenance and good daylight, designed to the budget from day one.',
  o:'A calm home for the next chapter of life.',m:['Front view','Ground floor plan','Living room']},
 {title:'Family Home Interiors',cat:'Interiors',loc:'Nagpur',hook:'Seven rooms for one family, from mandir room to home theatre.',
  facts:[['Type','Home interiors'],['Scope','Interior design'],['Rooms','Seven spaces']],
  c:'A whole home to furnish for a family with different needs in every room.',
  r:'A colourful dining area, a modern kitchen, a wood-and-marble mandir room with backlit panels and brass bells, a master bedroom with two walk-in wardrobes and a reading bay, and a room for gym, home theatre and work.',
  o:'A home that works for everyday life and for get-togethers.',m:['Dining area','Mandir room','Master bedroom with reading bay']},
 {title:'Bliss',cat:'Interiors',loc:'Nagpur',hook:'A honeycomb timber ceiling and a bird-motif metal screen.',
  facts:[['Type','Interior'],['Scope','Interiors · joinery · metalwork'],['Years','2025–26']],
  c:'A space that needed one memorable feature without feeling busy.',
  r:'A hexagonal ceiling in timber slats framing the view, and a tall metal grille with a bird motif screening an indoor planter.',
  o:'Two crafted pieces that give the space its character.',m:['Hexagonal slatted ceiling','Bird-motif grille over the planter','Ceiling layout']},
 {title:'Rise',cat:'Commercial',loc:'Nagpur',hook:'An office lit softly from the ceiling.',
  facts:[['Type','Office fit-out'],['Scope','Interiors · services'],['Years','2025–26']],
  c:'An office that needed good light and neat services without a cluttered ceiling.',
  r:'A layered false ceiling with concealed cove lighting, with fire-safety fittings coordinated into the ceiling grid.',
  o:'A calm, well-lit workplace.',m:['Cove-lit ceiling','Reflected ceiling plan','Workstations']},
 {title:'Commercial Shop, Lakhni',cat:'Commercial',loc:'Lakhni',hook:'Rebuilt in a busy market without closing the shop.',
  facts:[['Type','Retail shop'],['Scope','Architecture + execution'],['Delivered','Before Diwali']],
  c:'A crowded market with constant traffic, and a client who could not afford to close during construction.',
  r:'Construction was phased so the shop stayed open, planned carefully around the traffic.',
  o:'Delivered on time and on budget, and handed over before Diwali.',m:['Shop front','Phasing plan','Inside the shop']},
 {title:'Hanuman Temple, Pardi',cat:'Community',loc:'Pardi, Nagpur',hook:'A community temple rebuilt by the people who use it.',
  facts:[['Type','Community temple'],['Scope','Architecture'],['Funded by','Local residents']],
  c:'An old temple in a densely populated area, with residents funding a complete rebuild.',
  r:'A new temple designed around the restored original idols, with space for the community to gather.',
  o:'A rebuilt place of worship the neighbourhood is proud of.',m:['Exterior view','Plan','Inside the shrine']}
];
/* each project gets a slug used for its photo names: images/<slug>-1.jpg, -2.jpg, -3.jpg */
P.forEach(p=>{if(!p.slug)p.slug=p.title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")});
const CATS=['All','Homes','Interiors','Commercial','Community'];

const PLAN={
 home:{t:'New home',st:[['Consultation','1 week'],['Concept & 3D',[3,5]],['Drawings & sanction',[4,8]],['Construction',[40,70]],['Handover','2 weeks']],
   need:['Plot papers or the layout plan','A rough budget range','Who will live there, including elders or kids','Photos of the plot and the road','Homes you like (Instagram saves are fine)']},
 interiors:{t:'Interiors',st:[['Consultation','1 week'],['Layout & materials',[2,4]],['Joinery drawings',[2,3]],['Execution',[8,20]],['Styling & handover','1–2 weeks']],
   need:['Floor plan (a builder brochure is fine)','A rough budget range','Rooms to do first','Furniture you want to keep','Photos of spaces you like']},
 commercial:{t:'Commercial',st:[['Consultation','1 week'],['Concept & layout',[2,5]],['Drawings & approvals',[3,8]],['Execution',[10,40]],['Handover','1–2 weeks']],
   need:['Site plan or lease drawings','Business type and daily operations','Your target opening date','Brand colours or logo, if any','A rough budget range']}};
