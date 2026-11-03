/* =====================================================================
   ALAG PERSPECTIVE ARCHITECTS – SITE CONTENT
   Projects, the consultation planner and reviews live here. Keep the quotes and commas.

   PROJECTS
   - The order here is the order on the site (home page cards and "Next project").
   - Every project has its own page:  project.html?p=<slug>
   - Photos are matched by name in the images folder:
       images/<slug>-1.jpg  = card photo and the big photo at the top of the page
       images/<slug>-2.jpg, -3.jpg, ... = gallery (one per caption in "photos")
   - Leave any text as '' until you have it. Empty parts are skipped on the page.
   - heroVideo (optional): a WIDE video that plays full-screen at the top of the
       project page, e.g. heroVideo:'videos/personal-office-walkthrough.mp4'
       (with a .jpg cover of the same name). Without it, photo -1 is shown there.
   - video: square walk-through clips shown under the best photos.
   ===================================================================== */

/* SHOW_EMPTY
   true  = while building: every project shows, with "Photos coming soon" and
           "To add" boxes, so you can see the empty spaces.
   false = before going live: a project shows only once its -1 photo exists,
           and empty boxes are hidden. */
const SHOW_EMPTY=false;

/* PROJECTS ON THE HOME PAGE: 'list' = a list of names with a floating photo preview, 'grid' = the photo grid */
const PROJECT_VIEW='list';

/* HERO: the photos that slide on the home page, in order. [photo, caption, project link] */
const HERO=[
 ['images/architects-residence/exterior/1.jpg',"Architect's Residence",'project.html?p=architects-residence'],
 ['images/architects-residence/living/1.jpg',"Architect's Residence · living",'project.html?p=architects-residence#area-first'],
 ['images/personal-office-1.jpg','Personal Office','project.html?p=personal-office'],
 ['images/office-interiors-1.jpg','Office Interiors','project.html?p=office-interiors'],
 ['images/bedrooms/guest-bedroom/1.jpg','Residence Bedrooms · guest bedroom','project.html?p=residence-bedrooms&e=guest-bedroom'],
];

const P=[
 /* 1 */
 {title:"Architect's Residence",slug:'architects-residence',cat:'Residence',loc:'Nagpur',
  hook:'Our own home, where warm teak meets quiet grey.',
  facts:[['Type','Family home'],['Scope','Architecture · interiors'],['Photographed','2024']],
  c:'A family home that stays calm and easy to live in, and that also works as a test bed for the materials we use in client projects.',
  r:'Teak joinery against white walls and grey floors, upholstered headboards washed with cove light, a fluted-glass partition that brings daylight into the living room, and a study wall of open shelves on black steel uprights.',
  o:'A home that feels warm and modern at the same time.',
  photos:['Living room with fluted-glass partition','The street front at dusk, behind a brick jaali screen','Double-height living room with the staircase','Study with teak shelves on black steel','Daylight from a skylight washing the stair wall'],
  /* FLOORS: the page walks through the house floor by floor.
     Photos:  images/architects-residence/<area>/1.jpg, 2.jpg ...   Videos: videos/architects-residence/<area>.mp4
     Each photo is [file, caption]; add 'wide' to make it full width, or 'nocrop' to show the whole photo uncropped.
     "links" point to pages that already exist (the office, the bedrooms). */
  floors:[
   {name:'The house in drawings',slug:'drawings',text:'',drawings:true,
    compare:['images/architects-residence/drawings/south-elevation.jpg','images/architects-residence/exterior/2.jpg','Drag across to go from the south elevation drawing to the built house'],
    photos:[['images/architects-residence/drawings/south-elevation.jpg','South elevation, facing the 9 m road'],['images/architects-residence/drawings/section-1.jpg','Section 1'],['images/architects-residence/drawings/section-2.jpg','Section 2, through the staircase']]},
   {name:'Ground floor',slug:'ground',text:'',
    plan:['images/architects-residence/drawings/plan-ground.jpg','Ground floor plan: 1 parking, 2 garden, 3 home office, 4 W.C., 5 staircase'],
    rooms:[
     {name:'Exterior & garden',text:'',
      photos:[['images/architects-residence/exterior/1.jpg','The street front at dusk: a brick jaali in the boundary wall, the nameplate and the gate','wide'],
              ['images/architects-residence/exterior/2.jpg','The elevation: a textured grey frame with deep balconies and a tall terracotta jaali screen','nocrop'],
              ['images/architects-residence/exterior/3.jpg','The front garden: a white swing under the porch, facing a lit wall of projecting bricks']]},
     {name:'Lobby & staircase',text:'',video:'videos/architects-residence/lobby.mp4',
      photos:[['images/architects-residence/lobby/1.jpg','The lobby: a teak console and a sunburst mirror against the yellow wall'],
              ['images/architects-residence/lobby/2.jpg','The stair, with a slim steel railing and a terracotta jaali window'],
              ['images/architects-residence/lobby/3.jpg','Looking up the stair: the yellow wall, fluted glass into the living room and jaali windows'],
              ['images/architects-residence-5.jpg','Daylight from a skylight washing the stair wall']]}],
    links:[['project.html?p=personal-office','Personal Office','Our studio, on this floor']]},
   {name:'First floor',slug:'first',text:'Living, dining and kitchen are one open plan on the first floor.',
    plan:['images/architects-residence/drawings/plan-first.jpg','First floor plan: 1 living room, 2 dining area, 3 common toilet, 4 master bedroom, 5 kitchen, 6 utility, 7 balconies'],
    rooms:[
     {name:'Living',text:'',video:'videos/architects-residence/living.mp4',
      /* HOTSPOTS: tap a dot to read about a material. [left %, top %, name, note] */
      hot:{src:'images/architects-residence/living/1.jpg',cap:'Tap a dot to see the materials',
        spots:[[11,22,'Fluted glass partition','Lets daylight from the stair into the living room while blurring the view through.'],
               [16,74,'Floating teak TV unit','Lifted off the floor so the grey tile runs underneath and the room reads larger.'],
               [37,46,'Deep-set window','A teak-lined reveal frames the view of the trees outside.'],
               [68,38,'Red relief wall','A carved pattern in a strong red gives the room one bold surface against calm whites.'],
               [64,84,'Sofa on a teak base','A built-in L-sofa with a solid teak plinth that doubles as a side table at the ends.']]},
      photos:[
              ['images/architects-residence/living/2.jpg','The fluted-glass partition, with the yellow stair behind it'],
              ['images/architects-residence/living/3.jpg','The red relief wall, looking through to the kitchen and dining'],
              ['images/architects-residence/living/4.jpg','Fluted glass, a floating teak cabinet and a deep-set window']]},
     {name:'Mandir & hand wash',text:'',video:'videos/architects-residence/mandir.mp4',
      photos:[['images/architects-residence/mandir/1.jpg','The mandir: a backlit yantra between floating teak shelves, over a console with a pull-out diya tray','wide'],
              ['images/architects-residence/mandir/2.jpg','A separate hand-wash counter beside the double-height dining area']]},
     {name:'Kitchen',text:'The kitchen has its own washing area outside.',video:'videos/architects-residence/kitchen.mp4',
      photos:[['images/architects-residence/kitchen/1.jpg','From the kitchen, across the counter into the double-height dining and living','wide'],
              ['images/architects-residence/kitchen/2.jpg','The L-shaped counter, with teak overheads and a line-pattern tile'],
              ['images/architects-residence/kitchen/3.jpg','The cooking wall'],
              ['images/architects-residence/kitchen/4.jpg','Open pantry shelves under teak storage']]}],
    links:[['project.html?p=residence-bedrooms&e=bedroom-3','Master bedroom','On this floor']]},
   {name:'Second floor',slug:'second',text:'',
    plan:['images/architects-residence/drawings/plan-second.jpg','Second floor plan: 1 guest bedroom, 2 store room, 3 daughter\'s bedroom, 4 son\'s bedroom, 5 dress, 6 toilet, 7 balconies'],
    rooms:[],
    links:[['project.html?p=residence-bedrooms&e=bedroom-4','Daughter\'s bedroom','Blush tones and botanical panels'],
           ['project.html?p=residence-bedrooms&e=master-bedroom','Son\'s bedroom','Charcoal, teak and a line of light'],
           ['project.html?p=residence-bedrooms&e=guest-bedroom','Guest bedroom','A blue panelled wall and a Jaisalmer stone window']]},
  ],
  video:[]},

 /* 2 */
 {title:'Personal Office',slug:'personal-office',cat:'Workplace',loc:'Nari, Nagpur',
  hook:'A calm, warm 150 sq ft studio inside our home, made to unclutter the mind.',
  facts:[['Type','Home office'],['Area','About 150 sq ft'],['Scope','Planning · civil · furniture · materials'],['Year','2023']],
  c:'An office within our residence at Nari, on the quiet outskirts of Nagpur. In about 150 sq ft it had to feel calm and approachable for clients, hold a working library, and still fit an attached toilet and a place for guests to sit.',
  r:'We did all of it: the plan, civil work, furniture and materials. An 8 ft wide Alaska granite top makes the master table feel generous and binds the whole office together. Open teak shelves sit on slim black steel, the colours stay soft and warm, and a small sofa gives guests their own corner. Outside the window, planting buffers the quiet street but keeps it in view.',
  o:'The landscape becomes part of the office. From the table you look out at green and a street with very little hustle and bustle: a space that feels approachable, meaningful and uncluttered.',
  photos:['The studio: an 8 ft Alaska granite master table, teak shelves on black steel, and a window onto the street','The master table by the window, looking out at the planting','The library wall of open teak shelves on slim black steel','Guest chairs at the master table, with the quiet street beyond the window','The entrance, with the backlit studio sign','Shelves rising to the exposed concrete ceiling','Teak credenza under the library wall','The attached toilet, with a botanical wall'],
  heroVideo:'videos/personal-office-walkthrough.mp4',
  video:[]},

 /* 3 */
 {title:'Office Interiors',slug:'office-interiors',cat:'Workplace',loc:'Nagpur',
  hook:'Workplaces planned around how teams actually move.',
  facts:[['Type','Workplace interiors'],['Scope','Space planning · interiors'],['Year','']],
  c:'Growing teams that needed clear circulation, practical storage and finishes that hold up to daily use.',
  r:'We started from the plan: who sits where, who meets whom and where storage goes, then layered in lighting, joinery and durable finishes.',
  o:'Calm, organised workplaces that are easy to keep tidy.',
  photos:['Boardroom under a suspended light frame','Client lounge','Waiting lounge between glass-walled cabins','Director\'s cabin','Reception seating','Managing director\'s suite with arched doors','Meeting room','Prayer niche behind a carved screen'],
  video:[]},

 /* 4 */
 {title:'Residence Bedrooms',slug:'residence-bedrooms',cat:'Interiors',loc:'Nagpur',
  hook:'Each bedroom has its own theme. Open one to see its story, materials and walk-through.',
  facts:[['Type','Bedroom interiors'],['Year','2024']],
  c:'',r:'',o:'',
  photos:['Upholstered headboard washed with cove light'],   /* the cover only: each room has its own photos */
  video:[],
  /* ONE FOLDER PER BEDROOM
     photos:  images/bedrooms/<room slug>/1.jpg (cover), 2.jpg, 3.jpg ...
     video:   videos/bedrooms/<room slug>/walkthrough.mp4 (+ walkthrough.jpg cover)
     Each room gets its own page: project.html?p=residence-bedrooms&e=<room slug>
     To add a room: copy a block, give it a new slug, and make the two folders. */
  entryKind:'room',
  entries:[
   {name:'Master bedroom',slug:'bedroom-3',dir:'images/bedrooms/bedroom-3',
    video:'videos/bedrooms/bedroom-3/walkthrough.mp4',
    theme:'Warm colour, a panelled headboard and a glow of light',
    text:'This room was deliberately given a warm feeling, through colour and light. A wardrobe takes up one full wall so the rest of the room stays open and does not feel smaller. Below waist height the wardrobe changes to wood, which carries on into the shelves, the bed and the side tables. The brown-orange headboard is made of small cushioned vertical panels for texture, with a concealed warm LED behind it for mood lighting and reading at night. A full-length mirror sits beside a floating shelf, for function and for the look of the room, and the best part is hidden: an ironing table folds out of the shelf whenever it is needed.',
    facts:[['Theme','Warm wood and light'],['Size','About 10\u20326\u2033 \u00d7 15\u2032'],['Materials','Cushioned vertical-panel headboard · two-tone wardrobe wall · wood laminate shelves, bed and side tables'],['Lighting','Concealed warm LED behind the headboard'],['Hidden','A fold-out ironing table in the shelf']],
    photos:['The panelled headboard with a warm glow of light behind it','Full-length mirror and the floating shelf that hides a fold-out ironing table','Cushioned headboard panels, side table and the window frame']},
   {name:'Daughter\'s bedroom',slug:'bedroom-4',dir:'images/bedrooms/bedroom-4',
    video:'videos/bedrooms/bedroom-4/walkthrough.mp4',
    theme:'Blush tones and botanical panels',
    text:'A smaller bedroom, built around a corner of its own. Moulded frames on the bed wall hold personalised botanical wallpaper, which gives the room a rustic, cohesive feel. A study table runs on into a window seat: the client wanted a small niche to sit with music, coffee or a favourite book. A line of light runs above the seat, along with dedicated storage and open shelves for books and everything else. The wardrobe and walls are muted pastels for a calmer room, and a hanging grid above the table holds daily notes and photos of the things the client loves most.',
    facts:[['Theme','Blush and botanical'],['Size','About 10\u20326\u2033 \u00d7 11\u2032'],['Materials','Moulded wall frames · personalised wallpaper · muted pastel wardrobe and walls'],['Lighting','A line of light above the window seat and shelves']],
    photos:['Moulded frames with personalised botanical wallpaper behind a rust velvet headboard','The whole room: wardrobe, study table, window seat and the wall of frames','The window seat under a line of light and overhead storage','Study table with a hanging grid for notes and photos, and open book shelves above']},
   {name:'Son\'s bedroom',slug:'master-bedroom',dir:'images/bedrooms/master-bedroom',
    video:'videos/bedrooms/master-bedroom/walkthrough.mp4',
    theme:'Charcoal, teak and a line of light',
    text:'A bedroom with its own dressing area and attached toilet. The bed wall is clad in a charcoal matte tile with a beveled, rounded-square pattern, so the wall has texture you can see and feel. A white wardrobe keeps the rest of the room light. Photo frames and open storage shelves are left for whoever lives here to fill, so they can make the room their own. A strip of light runs along the ceiling and down the wall, drawing a single line that works as an interior element in its own right. The teak laminate and grey matte flooring run through the whole residence and tie the house together.',
    facts:[['Theme','Charcoal and teak'],['Size','About 11\u20326\u2033 \u00d7 15\u2032'],['Attached','Dressing area · toilet'],['Lighting','A line of light along the ceiling and down the wall'],['Materials','Charcoal textured matte tile · white wardrobe · teak laminate · grey matte floor']],
    photos:['The bed against a textured charcoal tile wall, split by a line of light','White wardrobe with teak strap handles, window seat and a floating desk','Teak bedside drawers beside the light line','Window seat with drawers and open book shelves','Gallery wall over a floating teak desk']},
   {name:'Guest bedroom',slug:'guest-bedroom',dir:'images/bedrooms/guest-bedroom',
    video:'videos/bedrooms/guest-bedroom/walkthrough.mp4',
    theme:'A blue panelled wall and a Jaisalmer stone window',
    text:'A guest room where the furniture stays simple and the wall does the work. A frame of wooden battens turns the bed wall into panelling, and the blue gives it depth. The Jaisalmer stone window frame adds a pop of colour, picked up by the green plants. The bed came from the client\'s old residence: we reclaimed it with a new laminate so it carries the theme of the house. Concealed lights run along the ceiling at the back of the feature wall, so at night the wall is washed in light and the room takes on a softer mood.',
    facts:[['Theme','Blue and Jaisalmer stone'],['Size','About 10\u20326\u2033 \u00d7 11\u2032'],['Materials','Wooden batten panelling in blue · Jaisalmer stone window frame · reclaimed bed in new laminate'],['Lighting','Concealed light along the ceiling, washing the feature wall']],
    photos:['The blue batten-panelled wall with the reclaimed bed and a Jaisalmer stone window','Concealed light along the top of the panelled wall','The Jaisalmer stone window frame with a monstera on the sill']},
  ]},

 /* 5  Sites in progress: one entry per site in "items", newest first.
       Photos for each site go in images/sites/<site>/1.jpg, 2.jpg ...  Each photo is [file, shape]: 'tall' or 'wide'. */
 {title:'Sites in Progress',slug:'sites-in-progress',cat:'On site now',loc:'Nagpur',
  hook:'Projects under construction, and how we run them on site.',
  facts:[['Sites running',''],['Site visits',''],['Updates to clients','']],
  c:'',r:'',o:'',
  photos:['Workstations going in on an office fit-out'],
  items:[
   {name:'Ahuja',place:'',status:'Under construction',text:'',photos:[['images/sites/ahuja/1.jpg','tall']]},
   {name:'Patrakar',place:'',status:'Structure in progress',text:'',photos:[['images/sites/patrakar/1.jpg','tall']]},
   {name:'Bliss',place:'',status:'Interiors in progress',text:'',photos:[['images/sites/bliss/1.jpg','wide'],['images/sites/bliss/2.jpg','wide']]},
   {name:'Office fit-out',place:'',status:'Interiors in progress',text:'',photos:[['images/sites/office-fitout/1.jpg','wide'],['images/sites/office-fitout/2.jpg','tall'],['images/sites/office-fitout/3.jpg','tall']]},
   {name:'Residential building',place:'',status:'Under construction',text:'',photos:[['images/sites/residence/1.jpg','tall']]},
   {name:'Garden pavilion',place:'',status:'Nearly complete',text:'',photos:[['images/sites/pavilion/1.jpg','wide']]},
  ],
  itemsTitle:'Current sites',
  video:[]},

 /* 6  Competitions & awards: one block per competition in "entries", newest or best first.
       Photos for an entry: images/competitions-awards-<entry slug>-1.jpg, -2.jpg ... (one per caption)
       video (optional): a wide clip that plays full-screen at the top of the entry's page
       soon:true shows a 'Coming soon' card that does not open yet; remove it once the details are in.
       Each entry gets its own page: project.html?p=competitions-awards&e=<entry slug>  */
 {title:'Competitions & Awards',slug:'competitions-awards',cat:'Recognition',loc:'',
  hook:'Design competitions we have entered, and the ideas behind them.',
  facts:[],
  c:'',r:'',o:'',
  photos:['ādaptive residence, the winning entry: the street front'],
  entries:[
   {name:'ādaptive residence',slug:'adaptive-residence',result:'1st prize',competition:'Archuary national design competition',level:'National',year:'2019',place:'Near Electronic City, Bengaluru',
    brief:'People move to big cities for studies and jobs, stay on as bachelors, and later settle there with their families or find partners in the same city. Near Electronic City in Bengaluru, with its national and international companies, that creates a steady demand for proper homes close to work, for single professionals and for young families.',
    idea:'ādaptive residence is a G+1 home on a compact plot that can change with the people living in it. The same plan works in four ways: a family home with three bedrooms and a guest room; two single-bedroom homes stacked one above the other, sharing parking, a terrace and a staircase from the lobby; a shared house for several bachelors with common spaces for leisure; or a 1BHK on the ground floor with first-floor bedrooms for paying guests.',
    photos:['The street front','From the corner, under the trees','Looking up at the roof frame and balconies','Ground floor plan','First floor plan','Front elevation','Section through the staircase'],
    /* numbered room legends for the plan drawings, keyed by photo number */
    legends:{
     4:[['Living room','13′ × 13′','172.7 sq ft'],['Dining area','13′ × 7′','91.8 sq ft'],['Kitchen','7′9″ × 10′4″','80.2 sq ft'],['Bedroom','11′5″ × 10′','113.4 sq ft'],['Powder room','5′ × 6′8″','33.8 sq ft'],['Lobby','','44.6 sq ft'],['Parking','14′ × 19′7″','273.2 sq ft'],['Lawn','','62.6 sq ft']],
     5:[['Master bedroom','13′ × 12′9″','167.3 sq ft'],['Toilet','9′ × 3′8″','32.6 sq ft'],['Bedroom','9′ × 13′3″','119.0 sq ft'],['Bedroom','11′5″ × 10′','113.4 sq ft'],['Common toilet','4′ × 7′8″','30.0 sq ft'],['Lobby','','58.1 sq ft'],['Open terrace','12′ × 13′','155.9 sq ft'],['Balcony','','65.4 sq ft']]},
    /* drawn on the page (not images): the four ways to live, and site to massing */
    scenarios:[
     {key:'A',title:'One family home',text:'A G+1 family home with three bedrooms, a guest bedroom and an internal staircase.',gf:'a',ff:'a'},
     {key:'B',title:'Two homes, stacked',text:'Two single-bedroom homes, one on each floor, sharing parking, the terrace and a staircase from the lobby.',gf:'a',ff:'b'},
     {key:'C',title:'A shared house',text:'One G+1 home shared by several bachelors, with common spaces for leisure.',gf:'c',ff:'c'},
     {key:'D',title:'Home with paying guests',text:'A 1BHK on the ground floor, with first-floor bedrooms let to bachelors as paying guests.',gf:'a',ff:'c'}],
    massing:['Site','Setbacks','Floor plate','Massing'],
    video:'videos/adaptive-residence-walkthrough.mp4',},
   {name:'Tetrisization',slug:'tetrisization',result:'',competition:'Tiny House, by Volume Zero',level:'International',year:'2025',place:'',
    brief:'India\'s fast-growing cities need safe, affordable homes for migrant workers, who move often for work and rarely have a stable place to live.',
    idea:'A modular home built from standardised blocks: walls, floors, doors and more. Each house is 16 blocks grouped in fours over about 300 sq ft, and like Tetris pieces they can be arranged in countless ways: more rooms, a larger shared space, or windows and doors moved, without changing the system. Homes can be taken apart, moved and rebuilt anywhere, and unused blocks can be returned and reused. Raised on a steel frame, with solar panels, water tanks and a roof terrace for sleeping on summer nights, clusters of these homes let groups migrate and settle together as a neighbourhood.',
    photos:['Arriving home','The home from the front, with the roof terrace and ladder','Section through the kitchen and bath','Section through the living room and bedroom','Ground floor plan','Elevation','Section','Tetris-style arrangements of the 16 blocks'],
    legends:{5:[['Living area'],['Storage'],['Kitchen'],['Breakfast table'],['Bath'],['W.C.'],['Bedroom'],['Study table'],['Recreational platform']]},
    /* construction details, shown as circles with their notes */
    details:[
     ['Wall joint (A)',['Fibre-reinforced cement sheet','Portland cement, binders and micaceous aggregate composite','Tongue and groove joinery']],
     ['Column base (B)',['MS plate','Anchor bolt attached to footing and plate','Vertical MS column sections','Concrete footing']],
     ['Wall to floor',['Wall panel','Anchor bolt','Framework supporting the floor','Reinforcement in slab panels','Vertical MS column']],
     ['Lintel and window',['Hollow rectangular MS pipe at lintel level','Wall panel and anchor bolt','Reinforcement in slab panels','Aluminium window section']],
     ['Light chajjah',['Glass louvres above the lintel for ventilation','Indirect natural light reflected inside','Water-drop groove below the chajjah']],
     ['Framework',['Rectangular hollow MS pipe at floor level','L-plate anchoring beams to columns','Column tied to beams and footing','Wall panel']]]},
   {name:'Oasis',slug:'oasis',result:'',competition:'IIA national design competition',level:'National',year:'2024',place:'Institute of Palliative Medicine, Kozhikode, Kerala',
    brief:'An extension for the Institute of Palliative Medicine in Kozhikode, designed as a social plug-in for its 7.5 acre campus near the Government Medical College. The site is steeply contoured and wrapped in dense greenery, with a small kaavu (sacred grove) inside, and already holds a palliative block, guest house, hostels, an open air theatre and a pavilion.',
    idea:'New public blocks are placed only where vegetation is thin and the ground is flat, so few trees are cut and the landscape stays intact. A public library, gift shop and multifunctional hall sit near the entrance; a medical library and media studio sit at the quiet far end; and the open air theatre becomes a larger amphitheatre, joined by two pavilions by the playground. The entrance gets a curved porch with a lily pond. Heights, roofs and materials follow the existing buildings, and curving paths that follow the contours tie it all into one loop.',
    photos:['The renovated entrance porch and lily pond','The amphitheatre, from the seating','The public library','The campus from above','The media studio, from the amphitheatre','Towards the medical library','The gift shop, from the entrance','The multifunctional hall','The pavilion by the playground','The exhibition pavilion']},
   {name:'The Container Studio',slug:'container-studio',result:'',competition:'International competition, by ArchDais',level:'International',year:'2021',place:'',
    brief:'An architect\'s studio with a public cafeteria, built from shipping containers on a site surrounded by offices, commercial spaces and housing.',
    idea:'The site is zoned into public, semi-public and private parts. The office is entered indirectly from the quieter side, away from traffic and construction, while the cafeteria faces the neighbourhood as a place for an evening snack or an office break. South and west faces are partly closed or given to short-stay uses to cut heat, north light fills the studio, office and dining spaces, and a stretched orange membrane on a steel frame shades the containers while keeping the open spaces visible.',
    photos:['The plaza, with the stretched membrane over the containers','Orange stairs up to the cafeteria deck','The entry towards the cafeteria','The cantilevered office container','The studio and workspace','The reference library and lobby','Workspace behind full-height glass','First and ground floor plans','Cross section','Front elevation with the membrane screen'],},
   {name:'Mixed-use high-rise apartment redevelopment',slug:'pune-redevelopment',soon:true,place:'Pune',
    competition:'',level:'',year:'',result:'',brief:'',idea:'',photos:[]},
  ],
  video:[]},
];
P.forEach(p=>{if(!p.slug)p.slug=p.title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")});

/* OUR OWN HOME IS OUR MATERIAL LAB: the moving strip on the home page.
   It drifts sideways on its own and can be swiped on phones. Order here = order in the strip.
   Photos:  ['photo','images/lab/1.jpg','Caption']   (put new photos in images/lab/)
   Videos:  ['video','videos/home-wardrobe.mp4','Caption']  (square or wide, muted) */
const LAB=[
 ['video','videos/home-master-bedroom.mp4','Son\'s bedroom'],
 ['photo','images/architects-residence-1.jpg','Living room with fluted-glass partition'],
 ['photo','images/architects-residence-4.jpg','Study with teak shelves on black steel'],
 ['video','videos/home-wardrobe.mp4','Wardrobe wall'],
 ['photo','images/architects-residence-3.jpg','Double-height living room'],
 ['photo','images/architects-residence-5.jpg','Skylight on the stair wall'],
 ['video','videos/home-guest-bedroom.mp4','Guest bedroom'],
 ['photo','images/architects-residence-2.jpg','The street front at dusk'],
];

/* PLANNER: stages and typical weeks shown in the consultation form
   [label, 'fixed text']  or  [label, [min weeks, max weeks]] (scaled by area) */
const PLAN={
 home:{t:'New home',st:[['Consultation','1 week'],['Concept & 3D',[3,5]],['Drawings & sanction',[4,8]],['Construction',[40,70]],['Handover','2 weeks']],
   need:['Plot papers or the layout plan','A rough budget range','Who will live there, including elders or kids','Photos of the plot and the road','Homes you like (Instagram saves are fine)']},
 interiors:{t:'Interiors',st:[['Consultation','1 week'],['Layout & materials',[2,4]],['Joinery drawings',[2,3]],['Execution',[8,20]],['Styling & handover','1–2 weeks']],
   need:['Floor plan (a builder brochure is fine)','A rough budget range','Rooms to do first','Furniture you want to keep','Photos of spaces you like']},
 commercial:{t:'Commercial',st:[['Consultation','1 week'],['Concept & layout',[2,5]],['Drawings & approvals',[3,8]],['Execution',[10,40]],['Handover','1–2 weeks']],
   need:['Site plan or lease drawings','Business type and daily operations','Your target opening date','Brand colours or logo, if any','A rough budget range']}};

/* GOOGLE REVIEWS
   Copy reviews from your Google Business profile. The Reviews section and menu link
   appear automatically once there is at least one entry. Up to 6 are shown.
   stars: 1-5. project: optional, e.g. "Bungalow interiors, Dharampeth".
   Example:
   {name:'Client name', stars:5, project:'Home interiors', text:'Their words here.'},
*/
const REVIEWS=[
 {name:'Ritessh Sarvade', stars:5, project:'', text:'Had a great experience with Alag Perspective Architects. Their approach to interior design is very thoughtful — from space planning to material selection, everything felt well-considered and practical. What I really liked was how patiently they understand requirements and then translate them into clean, functional interiors without overdoing things. The execution quality and attention to detail were impressive.'},
 {name:'Khushi Sundrani', stars:5, project:'', text:'They impressed me with their modern design aesthetic and their ability to listen to my needs and preferences. The final project was a dream home that exceeded my expectations. Highly recommended!'},
 {name:'Edwin Beale', stars:5, project:'', text:'Excellent work, I’m so impressed with the modern approach and attention to detail. A well guided approach to design along with great tips on blending nature into the design. Great working with the team. Highly recommended architecture company in Nagpur.'},
 {name:'Rushikesh Pund', stars:5, project:'', text:'It feels like stepping into a timeless European masterpiece. The design is elegant, artistic, and thoughtfully detailed in every corner. The service is professional, warm, and truly impressive.'},
 {name:'Kartik Jangid', stars:5, project:'', text:'They bring a thoughtful and creative approach to architectural design. Their work reflects a balance of functionality and aesthetic appeal, making them a pleasure to collaborate with.'},
 {name:'Aparna Takale', stars:5, project:'', text:'Great design direction, a well-known architecture firm in Nagpur, and excellent work with attention to detail.'},
];
/* Link to your Google reviews (from Google Maps: Share › Copy link). Leave '' to use a Maps search. */
const GOOGLE_REVIEWS_LINK='';
