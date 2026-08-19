/**
 * Las Vegas Valley neighborhoods — unique seller copy for each page.
 *
 * Prices, days-on-market, and sale-to-list ratios move monthly.
 * Do not hardcode those figures here. Point sellers to a current CMA.
 */

export type NeighborhoodRegion =
  | 'summerlin-west'
  | 'northwest'
  | 'southwest'
  | 'north-las-vegas'
  | 'henderson'
  | 'central-west';

export interface NeighborhoodFaq {
  question: string;
  answer: string;
}

export interface Neighborhood {
  slug: string;
  name: string;
  city: string;
  zip: string;
  region: NeighborhoodRegion;
  aliases: string[];
  headline: string;
  subhead: string;
  intro: string;
  sellingAngle: string;
  marketingPlan: string;
  amenities: string[];
  commute: string;
  listingTips: string[];
  nearby: string[];
}

export const REGION_LABELS: Record<NeighborhoodRegion, string> = {
  'summerlin-west': 'Summerlin & West Valley',
  northwest: 'Northwest Las Vegas',
  southwest: 'Southwest Las Vegas',
  'north-las-vegas': 'North Las Vegas',
  henderson: 'Henderson',
  'central-west': 'Central & West Las Vegas',
};

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    slug: 'summerlin',
    name: 'Summerlin',
    city: 'Las Vegas',
    zip: '89135',
    region: 'summerlin-west',
    aliases: ['Summerlin', 'West Summerlin', 'Downtown Summerlin'],
    headline: 'Sell Your Summerlin Home',
    subhead:
      'A listing plan built for Howard Hughes villages, Red Rock access, and the buyers already shopping this master plan.',
    intro:
      'Summerlin is a 22,500-acre Howard Hughes master plan on the west edge of the Las Vegas Valley. Villages run from Sun City Summerlin to The Ridges, with Downtown Summerlin retail, TPC Las Vegas, and trail connections to Red Rock Canyon. Sellers here compete village-by-village, not against the whole valley.',
    sellingAngle:
      'Buyers pay a Summerlin address premium when the listing shows village amenities, HOA facts, and a price that matches recent closed sales on the same street — not a valley-wide average.',
    marketingPlan:
      'We market your home to relocation buyers, luxury searchers, and local move-up shoppers already filtering for Summerlin ZIP codes. Photography, village-specific copy, and MLS syndication hit every portal the same day we go live.',
    amenities: [
      'Downtown Summerlin shopping and dining',
      'Red Rock Canyon trailheads',
      'TPC Las Vegas and multiple golf courses',
      'Village parks and 150+ miles of trails',
      'City National Arena and Red Rock Casino nearby',
    ],
    commute:
      'About 18–25 minutes to the Strip via the 215 Beltway, depending on village and time of day.',
    listingTips: [
      'Price to the village, not to “Summerlin” as a single number.',
      'Disclose master-plan dues, village HOA, and any SID/LID in the remarks.',
      'Lead with Red Rock views, trail access, or Downtown Summerlin proximity — whichever your lot actually has.',
    ],
    nearby: ['the-ridges', 'tournament-hills', 'heritage-stonebridge', 'reverence', 'west-summerlin'],
  },
  {
    slug: 'the-ridges',
    name: 'The Ridges',
    city: 'Summerlin',
    zip: '89135',
    region: 'summerlin-west',
    aliases: ['The Ridges', 'The Ridges Summerlin'],
    headline: 'Sell Your Home in The Ridges',
    subhead:
      'Guard-gated Summerlin estates need a luxury launch — not a generic MLS upload.',
    intro:
      'The Ridges is Summerlin’s ultra-luxury guard-gated village against the Red Rock escarpment. Custom estates, golf-course lots, and canyon views define the inventory. Buyers here compare architecture, lot orientation, and privacy — not just bedroom count.',
    sellingAngle:
      'Trophy listings in The Ridges sell when staging, twilight photography, and off-market outreach reach high-net-worth buyers before the home looks stale on the portals.',
    marketingPlan:
      'We run a luxury campaign: cinematic video, targeted ads, brokerage-to-brokerage pocket outreach, and a showing protocol that protects privacy while still creating urgency.',
    amenities: [
      '24-hour guard-gated entry',
      'Bear’s Best and nearby TPC golf',
      'Red Rock Canyon views',
      'Private parks and trail connections',
      'Custom and semi-custom estate inventory',
    ],
    commute:
      'Roughly 20–28 minutes to the Strip via the 215; Red Rock Canyon is minutes from the gates.',
    listingTips: [
      'Lead with lot, view corridor, and architecture — not a valley median.',
      'Pre-list inspections reduce renegotiation on custom systems and finishes.',
      'Coordinate showings; drive-by traffic does not exist behind the gate.',
    ],
    nearby: ['tournament-hills', 'reverence', 'red-rock-country-club', 'summerlin', 'west-summerlin'],
  },
  {
    slug: 'tournament-hills',
    name: 'Tournament Hills',
    city: 'Summerlin',
    zip: '89134',
    region: 'summerlin-west',
    aliases: ['Tournament Hills'],
    headline: 'Sell Your Tournament Hills Home',
    subhead:
      'Golf-course frontage and TPC Las Vegas access are the listing story — we make sure buyers see both.',
    intro:
      'Tournament Hills sits along the TPC Las Vegas golf course in Summerlin. Lots range from course-adjacent homes to interior streets with village amenities. Sellers who skip golf-frontage comps leave money on the table; sellers who ignore HOA and view-corridor differences overprice.',
    sellingAngle:
      'Golf-course lots and interior lots are different products. We price and photograph them that way so the right buyer pool self-selects.',
    marketingPlan:
      'Listing copy, drone of the fairway relationship, and outreach to golf-lifestyle buyers already watching Summerlin inventory.',
    amenities: [
      'TPC Las Vegas golf course',
      'Summerlin trail system',
      'Village recreation',
      'Downtown Summerlin within a short drive',
      'Red Rock Canyon access',
    ],
    commute: 'About 20–25 minutes to the Strip via the 215 Beltway.',
    listingTips: [
      'Separate golf-frontage comps from interior-street comps.',
      'Show the course relationship with drone stills, not just the kitchen.',
      'State HOA and golf-adjacent rules clearly in MLS remarks.',
    ],
    nearby: ['the-ridges', 'summerlin', 'sun-city-summerlin', 'queensridge'],
  },
  {
    slug: 'heritage-stonebridge',
    name: 'Heritage at Stonebridge',
    city: 'Summerlin',
    zip: '89135',
    region: 'summerlin-west',
    aliases: ['Heritage at Stonebridge', 'Stonebridge', 'Heritage Stonebridge', 'Stoneridge'],
    headline: 'Sell Your Heritage at Stonebridge Home',
    subhead:
      'Newer Summerlin product near Red Rock — priced against village comps, not older west-side stock.',
    intro:
      'Heritage at Stonebridge is a gated Summerlin village with newer construction and Red Rock proximity. Buyers compare floor plans, lot orientation, and remaining builder inventory. A resale here competes with both neighbors and any active new-construction premiums.',
    sellingAngle:
      'We position your resale against current builder incentives and recent gated-village closings so you are not undercut by a model home down the street.',
    marketingPlan:
      'Floor-plan-accurate photography, gated-community lifestyle video, and MLS remarks that name Stonebridge amenities instead of generic “Summerlin living.”',
    amenities: [
      'Gated village entry',
      'Stonebridge parks and trails',
      'Red Rock Canyon proximity',
      'Newer construction floor plans',
      'Downtown Summerlin access',
    ],
    commute: 'About 20–25 minutes to the Strip; Red Rock Canyon is close to the village edge.',
    listingTips: [
      'Match your list price to same-plan and same-gate closings.',
      'Call out upgrades versus original builder spec.',
      'Time the launch around competing new-construction specials.',
    ],
    nearby: ['reverence', 'west-summerlin', 'summerlin', 'the-ridges'],
  },
  {
    slug: 'reverence',
    name: 'Reverence',
    city: 'Summerlin',
    zip: '89135',
    region: 'summerlin-west',
    aliases: ['Reverence', 'Reverence Summerlin'],
    headline: 'Sell Your Reverence Home',
    subhead:
      'Guard-gated Summerlin with resort amenities — buyers expect a listing that looks like the address.',
    intro:
      'Reverence is a guard-gated Summerlin village with resort-style amenities and elevated lots. Inventory is newer than classic Summerlin villages and competes on finish level, view, and privacy. Buyers touring Reverence are already comparing The Ridges-adjacent product.',
    sellingAngle:
      'A Reverence listing wins when the marketing matches guard-gated expectations: twilight sets, amenity video, and a showing calendar that feels exclusive without hiding the home.',
    marketingPlan:
      'Luxury portal placement, targeted ads to high-intent Summerlin shoppers, and broker previews before public MLS day when the home warrants it.',
    amenities: [
      'Guard-gated entry',
      'Resort-style clubhouse and pool',
      'Trail connections',
      'Red Rock and Strip view corridors on select lots',
      'Newer construction inventory',
    ],
    commute: 'About 22–28 minutes to the Strip via the 215.',
    listingTips: [
      'Price to Reverence closings, not to older Summerlin villages.',
      'Document view corridors — they are a primary value driver.',
      'Stage outdoor living; amenity-rich buyers tour the backyard first.',
    ],
    nearby: ['heritage-stonebridge', 'the-ridges', 'west-summerlin', 'summerlin'],
  },
  {
    slug: 'west-summerlin',
    name: 'West Summerlin',
    city: 'Summerlin',
    zip: '89135',
    region: 'summerlin-west',
    aliases: ['West Summerlin'],
    headline: 'Sell Your West Summerlin Home',
    subhead:
      'Closest Summerlin villages to Red Rock Canyon — list the canyon access, not a generic west-side story.',
    intro:
      'West Summerlin covers the villages nearest Red Rock Canyon, including newer master-plan edges and gated enclaves. Commute, trailheads, and lot elevation change block by block. Sellers who use a single “Summerlin” comp set miss those differences.',
    sellingAngle:
      'We sell the canyon-edge location with maps, trail distances, and village-specific comps so buyers see why this side of the master plan prices differently.',
    marketingPlan:
      'Drone of the escarpment relationship, village amenity shots, and syndication that still ranks for “West Summerlin homes for sale.”',
    amenities: [
      'Red Rock Canyon National Conservation Area',
      'Newer village recreation',
      'Trailheads within a short drive',
      'Downtown Summerlin via the 215',
      'Mix of gated and open villages',
    ],
    commute: 'About 22–30 minutes to the Strip; minutes to Red Rock scenic drive.',
    listingTips: [
      'Name the village, not only “West Summerlin.”',
      'Measure actual trail and canyon access from the lot.',
      'Watch competing new construction on the western edge.',
    ],
    nearby: ['summerlin', 'reverence', 'heritage-stonebridge', 'the-ridges'],
  },
  {
    slug: 'red-rock-country-club',
    name: 'Red Rock Country Club',
    city: 'Summerlin',
    zip: '89135',
    region: 'summerlin-west',
    aliases: ['Red Rock Country Club'],
    headline: 'Sell Your Red Rock Country Club Home',
    subhead:
      'Guard-gated golf community — membership, course views, and custom product need a specialist listing.',
    intro:
      'Red Rock Country Club is a guard-gated golf community in Summerlin with custom and semi-custom homes. Club membership, course frontage, and architectural quality drive value. Generic luxury marketing does not answer the questions this buyer already has.',
    sellingAngle:
      'We package membership facts, golf-frontage comps, and privacy protocols so qualified buyers can act without a week of back-and-forth.',
    marketingPlan:
      'Golf-lifestyle video, targeted luxury outreach, and MLS remarks that separate club-community value from nearby non-golf estates.',
    amenities: [
      'Guard-gated golf community',
      'Arnold Palmer-designed courses',
      'Clubhouse and tennis',
      'Red Rock views on select lots',
      'Summerlin trail access',
    ],
    commute: 'About 20–28 minutes to the Strip via the 215.',
    listingTips: [
      'Disclose club membership transfer rules up front.',
      'Do not mix golf-frontage comps with interior lots.',
      'Pre-list for custom finishes buyers will inspect anyway.',
    ],
    nearby: ['the-ridges', 'queensridge', 'summerlin', 'tournament-hills'],
  },
  {
    slug: 'queensridge',
    name: 'Queensridge',
    city: 'Las Vegas',
    zip: '89134',
    region: 'summerlin-west',
    aliases: ['Queensridge'],
    headline: 'Sell Your Queensridge Home',
    subhead:
      'Guard-gated custom estates west of the Strip — buyers want lot size, architecture, and privacy in the first three photos.',
    intro:
      'Queensridge is a guard-gated custom-home community near Summerlin with large lots and distinctive architecture. Inventory turns slower than production housing; presentation and pricing discipline matter more than listing volume.',
    sellingAngle:
      'Custom estates here sell to a small buyer pool. We reach that pool with luxury media and broker-to-broker outreach instead of hoping portal traffic converts.',
    marketingPlan:
      'Architectural photography, lot diagrams, and a private showing plan that still feeds MLS and luxury networks.',
    amenities: [
      'Guard-gated custom community',
      'Large lots',
      'Near Summerlin and the 215',
      'Proximity to Red Rock Casino corridor',
      'Custom architecture',
    ],
    commute: 'About 15–22 minutes to the Strip.',
    listingTips: [
      'Lead with lot square footage and architecture.',
      'Price to Queensridge custom comps, not production Summerlin.',
      'Plan for a longer showing window and fewer, higher-intent tours.',
    ],
    nearby: ['red-rock-country-club', 'summerlin', 'the-lakes', 'tournament-hills'],
  },
  {
    slug: 'sun-city-summerlin',
    name: 'Sun City Summerlin',
    city: 'Las Vegas',
    zip: '89134',
    region: 'summerlin-west',
    aliases: ['Sun City Summerlin', 'Sun City'],
    headline: 'Sell Your Sun City Summerlin Home',
    subhead:
      '55+ Del Webb village — list to the age-qualified buyer already comparing floor plans inside the gates.',
    intro:
      'Sun City Summerlin is a Del Webb 55+ community in Summerlin with golf, recreation centers, and a defined floor-plan inventory. Age-qualified housing has its own buyer pool, HOA rules, and comparable set. Treating it like a typical Summerlin resale is how listings sit.',
    sellingAngle:
      'We market to 55+ buyers searching Sun City by model name, golf adjacency, and renovation level — the filters they actually use.',
    marketingPlan:
      'Model-accurate remarks, recreation-center photos, and syndication that still ranks for Sun City Summerlin resale searches.',
    amenities: [
      'Age-qualified 55+ community',
      'Multiple golf courses',
      'Recreation centers and pools',
      'Indoor and outdoor clubs',
      'Summerlin shopping nearby',
    ],
    commute: 'About 20–25 minutes to the Strip via the 215.',
    listingTips: [
      'Name the floor plan in MLS — Sun City buyers search by model.',
      'Document updates versus original Del Webb spec.',
      'Confirm occupancy and HOA age rules before going live.',
    ],
    nearby: ['summerlin', 'tournament-hills', 'the-lakes', 'desert-shores'],
  },
  {
    slug: 'skye-canyon',
    name: 'Skye Canyon',
    city: 'Las Vegas',
    zip: '89166',
    region: 'northwest',
    aliases: ['Skye Canyon'],
    headline: 'Sell Your Skye Canyon Home',
    subhead:
      'Northwest master plan with Skye Center amenities — new construction next door is your real competition.',
    intro:
      'Skye Canyon is a master-planned community in ZIP 89166 with parks, trails, pools, and Skye Center as the amenity hub. Resales compete with active builders. Sellers who ignore builder incentives overprice; sellers who ignore amenity access under-tell the story.',
    sellingAngle:
      'We price your resale against live builder specials and recent same-plan closings, then sell the community amenities a spec lot cannot match.',
    marketingPlan:
      'Skye Center and trail photography, floor-plan-accurate listing copy, and alerts to buyers already watching 89166.',
    amenities: [
      'Skye Center amenity campus',
      'Parks, pools, and desert trails',
      'Newer construction inventory',
      'Northwest trail system',
      'Proximity to US-95',
    ],
    commute: 'About 25–35 minutes to the Strip via US-95, depending on traffic.',
    listingTips: [
      'Pull current builder incentives before setting list price.',
      'Show walkability to Skye Center and parks from the lot.',
      'Call out landscaping and window coverings builders often exclude.',
    ],
    nearby: ['skye-summit', 'centennial-hills', 'lone-mountain', 'providence'],
  },
  {
    slug: 'skye-summit',
    name: 'Skye Summit',
    city: 'Las Vegas',
    zip: '89166',
    region: 'northwest',
    aliases: ['Skye Summit'],
    headline: 'Sell Your Skye Summit Home',
    subhead:
      'Guard-gated Skye Canyon enclave — Strip and desert views need a luxury listing, not a production-home template.',
    intro:
      'Skye Summit is the guard-gated luxury enclave inside Skye Canyon. Elevated lots, larger floor plans, and view corridors separate it from the rest of 89166. Buyers comparing Skye Summit to Summerlin gated product expect matching marketing.',
    sellingAngle:
      'We sell the view, the gate, and the lot — then back the ask with Skye Summit comps, not broader Skye Canyon averages.',
    marketingPlan:
      'Twilight and drone of the view corridor, gated-community video, and outreach to luxury buyers already in northwest Las Vegas.',
    amenities: [
      'Guard-gated enclave',
      'Elevated desert and Strip views on select lots',
      'Access to Skye Canyon amenities',
      'Newer luxury construction',
      'Northwest trail system',
    ],
    commute: 'About 28–38 minutes to the Strip via US-95.',
    listingTips: [
      'Do not average Skye Summit with non-gated Skye Canyon.',
      'Photograph the view at the hour it actually performs.',
      'Document upgrades versus original builder package.',
    ],
    nearby: ['skye-canyon', 'centennial-hills', 'lone-mountain'],
  },
  {
    slug: 'centennial-hills',
    name: 'Centennial Hills',
    city: 'Las Vegas',
    zip: '89149',
    region: 'northwest',
    aliases: ['Centennial Hills'],
    headline: 'Sell Your Centennial Hills Home',
    subhead:
      'Northwest corridor along US-95 — more inventory means pricing and presentation decide how fast you close.',
    intro:
      'Centennial Hills covers a large northwest Las Vegas area around ZIP 89149, with parks, the Centennial Hills Hospital corridor, and a mix of production and custom homes. Inventory has been heavier than the prior year in recent reports, so a well-priced listing still moves while an optimistic ask sits.',
    sellingAngle:
      'We set list price from same-street and same-plan closings, then market to buyers already shopping the US-95 northwest corridor — including those comparing Skye Canyon and Summerlin North.',
    marketingPlan:
      'MLS-first launch, neighborhood photo set (Centennial Hills Park, trailheads, retail on the 95), and weekly price-position reviews against new listings.',
    amenities: [
      'Centennial Hills Park',
      'US-95 retail and medical corridor',
      'Floyd Lamb and Tule Springs access nearby',
      'Mix of master plans and established streets',
      'Mountain views on many lots',
    ],
    commute: 'About 20–30 minutes to the Strip via US-95.',
    listingTips: [
      'In a higher-inventory ZIP, launch at the number that wins the first 10 days.',
      'Separate custom-lot comps from production tracts.',
      'Call out HVAC age, roof, and solar — northwest buyers ask immediately.',
    ],
    nearby: ['skye-canyon', 'lone-mountain', 'providence', 'tule-springs'],
  },
  {
    slug: 'lone-mountain',
    name: 'Lone Mountain',
    city: 'Las Vegas',
    zip: '89129',
    region: 'northwest',
    aliases: ['Lone Mountain'],
    headline: 'Sell Your Lone Mountain Home',
    subhead:
      'Trailhead lots and mountain backdrop — list the hike-out-your-door location with comps from the same ridge, not the whole 89129.',
    intro:
      'Lone Mountain is a northwest Las Vegas area defined by the peak, trailheads, and a mix of custom and production housing in ZIP 89129. View lots and interior lots are different products. Buyers already compare this pocket to Centennial Hills and Summerlin North.',
    sellingAngle:
      'We sell trail access and mountain orientation with maps and drone, then price against the closest ridge comps so the ask is defensible on day one.',
    marketingPlan:
      'Trailhead and peak photography, lot-orientation diagrams, and MLS copy that names Lone Mountain instead of a generic northwest label.',
    amenities: [
      'Lone Mountain trailheads',
      'Desert and mountain views',
      'Northwest parks',
      'Access to US-95 and the 215',
      'Mix of custom and production homes',
    ],
    commute: 'About 18–28 minutes to the Strip via US-95 or the 215.',
    listingTips: [
      'View-lot comps and non-view comps should never share a median.',
      'State any horse-property or large-lot constraints clearly.',
      'Show the actual trail distance from the driveway.',
    ],
    nearby: ['centennial-hills', 'skye-canyon', 'summerlin', 'providence'],
  },
  {
    slug: 'providence',
    name: 'Providence',
    city: 'Las Vegas',
    zip: '89131',
    region: 'northwest',
    aliases: ['Providence'],
    headline: 'Sell Your Providence Home',
    subhead:
      'Northwest master plan with parks and a town-center layout — resales win when they beat tired listings, not when they ignore them.',
    intro:
      'Providence is a master-planned community in northwest Las Vegas with parks, trails, and a defined village layout. Production floor plans repeat, so condition, landscaping, and list price relative to the last three same-plan sales decide the outcome.',
    sellingAngle:
      'We launch with same-plan comps and a punch-list so your home is the cleanest, best-priced Providence listing live that week.',
    marketingPlan:
      'Community amenity photos, floor-plan-accurate remarks, and buyer alerts to shoppers already saved-searching Providence.',
    amenities: [
      'Master-plan parks and trails',
      'Community recreation',
      'Northwest retail nearby',
      'Production and some semi-custom product',
      'US-95 access',
    ],
    commute: 'About 22–32 minutes to the Strip via US-95.',
    listingTips: [
      'Pull same-elevation, same-plan closings before setting price.',
      'Fix landscaping and paint — production buyers tour several homes in one afternoon.',
      'Disclose HOA and any SID/LID in the first remarks block.',
    ],
    nearby: ['centennial-hills', 'skye-canyon', 'aliante', 'tule-springs'],
  },
  {
    slug: 'tule-springs',
    name: 'Tule Springs',
    city: 'Las Vegas',
    zip: '89131',
    region: 'northwest',
    aliases: ['Tule Springs'],
    headline: 'Sell Your Tule Springs Area Home',
    subhead:
      'Northwest lots near Tule Springs Fossil Beds and Floyd Lamb Park — space and trail access are the listing.',
    intro:
      'The Tule Springs area sits at the north edge of the Las Vegas Valley near Floyd Lamb Park and Tule Springs Fossil Beds National Monument. Larger lots and newer tracts mix with desert-open-space adjacency. Buyers shopping here are often comparing Centennial Hills and Skye Canyon.',
    sellingAngle:
      'We sell park and monument proximity with actual drive times and lot size, then price against the closest northwest comps — not a valley median.',
    marketingPlan:
      'Open-space drone, park photography, and MLS keywords buyers use for Tule Springs and northwest large-lot searches.',
    amenities: [
      'Floyd Lamb Park at Tule Springs',
      'Tule Springs Fossil Beds National Monument',
      'Larger lots in select tracts',
      'Northwest trail access',
      'US-95 corridor',
    ],
    commute: 'About 25–35 minutes to the Strip via US-95.',
    listingTips: [
      'Measure lot size accurately — it is a primary filter here.',
      'Do not imply monument access you do not have.',
      'Compare to Centennial Hills and Providence only when the product matches.',
    ],
    nearby: ['centennial-hills', 'providence', 'skye-canyon', 'aliante'],
  },
  {
    slug: 'mountains-edge',
    name: 'Mountains Edge',
    city: 'Las Vegas',
    zip: '89178',
    region: 'southwest',
    aliases: ['Mountains Edge', 'Mountain Edge', 'Mountain’s Edge'],
    headline: 'Sell Your Mountains Edge Home',
    subhead:
      'Southwest master plan against the ridgeline — list mountain views and 215 access with tract-level comps.',
    intro:
      'Mountains Edge (often written Mountain’s Edge) is a southwest Las Vegas master plan in the 89178 area with parks, trails, and ridgeline views. Production housing dominates; condition and price versus the last same-plan sale decide speed.',
    sellingAngle:
      'We position your home against live southwest inventory so buyers comparing Rhodes Ranch and Southern Highlands see a clear, current number.',
    marketingPlan:
      'Ridgeline photography, community park shots, and MLS copy that uses both “Mountains Edge” and “Mountain’s Edge” search terms.',
    amenities: [
      'Exploration Peak Park nearby',
      'Community parks and trails',
      'Ridgeline and mountain views on select lots',
      '215 Beltway access',
      'Southwest retail corridors',
    ],
    commute: 'About 20–30 minutes to the Strip via the 215.',
    listingTips: [
      'Use the community’s common spellings in remarks so searches match.',
      'View lots need view comps — interior lots do not.',
      'Check HOA and landscape rules before promising “easy outdoor living.”',
    ],
    nearby: ['southern-highlands', 'rhodes-ranch', 'enterprise', 'spring-valley'],
  },
  {
    slug: 'southern-highlands',
    name: 'Southern Highlands',
    city: 'Las Vegas',
    zip: '89141',
    region: 'southwest',
    aliases: ['Southern Highlands'],
    headline: 'Sell Your Southern Highlands Home',
    subhead:
      'Guard-gated golf and luxury villages in the southwest — the listing has to match the gate.',
    intro:
      'Southern Highlands is a master-planned community in southwest Las Vegas with golf, guard-gated enclaves, and a wide price band from production to custom. I-15 access and the southern ridgeline define the location. Buyers compare villages inside the plan, not the whole 89141 ZIP.',
    sellingAngle:
      'We price to the village and gate, then run marketing that looks like Southern Highlands — golf, ridgeline, and finish level — not a generic southwest flyer.',
    marketingPlan:
      'Golf and amenity video, luxury syndication where the product warrants it, and broker outreach across southwest Las Vegas and Henderson.',
    amenities: [
      'Southern Highlands Golf Club',
      'Guard-gated villages',
      'Parks and trails',
      'I-15 access',
      'Ridgeline views on select lots',
    ],
    commute: 'About 20–30 minutes to the Strip via I-15; convenient to the southern 215.',
    listingTips: [
      'Name the village and gate in MLS.',
      'Separate golf-course comps from interior product.',
      'Document upgrades; production and custom share the same master plan.',
    ],
    nearby: ['mountains-edge', 'enterprise', 'seven-hills', 'anthem'],
  },
  {
    slug: 'rhodes-ranch',
    name: 'Rhodes Ranch',
    city: 'Las Vegas',
    zip: '89148',
    region: 'southwest',
    aliases: ['Rhodes Ranch'],
    headline: 'Sell Your Rhodes Ranch Home',
    subhead:
      'Southwest golf community near the 215 — list course relationship and HOA facts so buyers can say yes faster.',
    intro:
      'Rhodes Ranch is a golf community in southwest Las Vegas near the 215. Inventory includes golf-frontage and interior homes with shared amenities. Buyers already comparing Mountains Edge and Spring Valley need a listing that answers HOA, golf, and commute in the first screen.',
    sellingAngle:
      'We sell the golf-community lifestyle with accurate frontage comps and a price that survives the first weekend of competing southwest listings.',
    marketingPlan:
      'Course-relationship photos, amenity set, and MLS alerts to buyers with Rhodes Ranch saved searches.',
    amenities: [
      'Rhodes Ranch Golf Club',
      'Community recreation',
      '215 Beltway access',
      'Southwest retail',
      'Mix of golf and interior lots',
    ],
    commute: 'About 15–25 minutes to the Strip via the 215.',
    listingTips: [
      'State golf-frontage honestly — buyers will verify on the tour.',
      'Include HOA and any golf dues in remarks.',
      'Launch mid-week so the first weekend is fully live on portals.',
    ],
    nearby: ['mountains-edge', 'spring-valley', 'enterprise', 'spanish-trail'],
  },
  {
    slug: 'spanish-trail',
    name: 'Spanish Trail',
    city: 'Las Vegas',
    zip: '89113',
    region: 'southwest',
    aliases: ['Spanish Trail'],
    headline: 'Sell Your Spanish Trail Home',
    subhead:
      'Guard-gated golf estates near the 215 — custom product needs a luxury listing plan.',
    intro:
      'Spanish Trail is a guard-gated golf community in southwest Las Vegas with custom and semi-custom homes. Course views, lot size, and architecture drive value. Portal traffic alone does not reach this buyer pool.',
    sellingAngle:
      'We run a luxury campaign with privacy-respecting showings and comps limited to Spanish Trail and true peer gated golf communities.',
    marketingPlan:
      'Architectural photography, golf-frontage drone, and brokerage outreach to agents already working Spanish Trail buyers.',
    amenities: [
      'Guard-gated golf community',
      'Spanish Trail Country Club',
      'Tennis and club amenities',
      '215 Beltway access',
      'Custom estate inventory',
    ],
    commute: 'About 12–20 minutes to the Strip via the 215.',
    listingTips: [
      'Do not use production-home comps from adjacent tracts.',
      'Pre-list inspections on custom systems.',
      'Coordinate gate access for every showing.',
    ],
    nearby: ['rhodes-ranch', 'spring-valley', 'queensridge', 'the-lakes'],
  },
  {
    slug: 'spring-valley',
    name: 'Spring Valley',
    city: 'Las Vegas',
    zip: '89147',
    region: 'southwest',
    aliases: ['Spring Valley'],
    headline: 'Sell Your Spring Valley Home',
    subhead:
      'Established southwest streets near the 215 — price to the tract, then out-present the three listings next door.',
    intro:
      'Spring Valley is an established southwest Las Vegas area with a mix of 1980s–2000s production housing, infill, and pockets near Chinatown and the 215. Commute and lot size vary by tract. Buyers here tour several homes in a day; the cleanest, best-priced listing wins.',
    sellingAngle:
      'We launch at a number that survives side-by-side tours, then market commute and lot facts instead of a vague “central location” claim.',
    marketingPlan:
      'Tract-accurate photos, 215 commute map, and aggressive first-10-day monitoring against new Spring Valley inventory.',
    amenities: [
      '215 Beltway access',
      'Nearby retail and dining corridors',
      'Parks scattered by tract',
      'Mix of lot sizes',
      'Short drive to the Strip',
    ],
    commute: 'About 10–20 minutes to the Strip via the 215 or surface streets.',
    listingTips: [
      'Repair paint, landscape, and HVAC presentation before photos.',
      'Price against the three most similar actives, not a ZIP median.',
      'Disclose roof and HVAC ages — buyers ask on the first tour.',
    ],
    nearby: ['rhodes-ranch', 'the-lakes', 'spanish-trail', 'enterprise'],
  },
  {
    slug: 'enterprise',
    name: 'Enterprise',
    city: 'Las Vegas',
    zip: '89139',
    region: 'southwest',
    aliases: ['Enterprise'],
    headline: 'Sell Your Enterprise Home',
    subhead:
      'South-southwest Las Vegas near I-15 and the 215 — list against Mountains Edge and Southern Highlands only when the product matches.',
    intro:
      'Enterprise covers a large south-southwest area of the Las Vegas Valley with newer production tracts, infill, and proximity to I-15. It is not one neighborhood. Tract, year built, and HOA change the comparable set.',
    sellingAngle:
      'We name the tract, pull matching comps, and sell I-15 / 215 access with real drive times — not a valley-wide story.',
    marketingPlan:
      'Tract-level photography, freeway-access map, and MLS copy that ranks for the community name buyers actually type.',
    amenities: [
      'I-15 and 215 access',
      'Newer production tracts',
      'Parks by subdivision',
      'South Strip corridor nearby',
      'Mix of HOA and non-HOA streets',
    ],
    commute: 'About 15–25 minutes to the Strip via I-15.',
    listingTips: [
      'Never price Enterprise as a single market.',
      'Match year-built and HOA to the comps.',
      'Call out any SID/LID remaining.',
    ],
    nearby: ['mountains-edge', 'southern-highlands', 'rhodes-ranch', 'spring-valley'],
  },
  {
    slug: 'the-lakes',
    name: 'The Lakes',
    city: 'Las Vegas',
    zip: '89128',
    region: 'central-west',
    aliases: ['The Lakes'],
    headline: 'Sell Your Home in The Lakes',
    subhead:
      'Lake-adjacent west-central community — water views and interior lots are different listings.',
    intro:
      'The Lakes is a west-central Las Vegas community organized around lakes, paths, and a mix of single-family homes. Water-view lots command a different buyer than interior streets. Summerlin and Desert Shores are the usual comparison set.',
    sellingAngle:
      'We photograph the water relationship honestly and price view lots against view comps so the ask holds up on the tour.',
    marketingPlan:
      'Lake and path photography, village-accurate remarks, and outreach to buyers already watching The Lakes and Desert Shores.',
    amenities: [
      'Community lakes and paths',
      'Parks and recreation',
      'West-central 215 access',
      'Nearby Summerlin retail',
      'Mix of water-view and interior lots',
    ],
    commute: 'About 15–22 minutes to the Strip via the 215.',
    listingTips: [
      'Do not use interior comps for water-view homes.',
      'State HOA lake and dock rules clearly.',
      'Show path access from the lot, not a stock lake photo.',
    ],
    nearby: ['desert-shores', 'summerlin', 'queensridge', 'sun-city-summerlin'],
  },
  {
    slug: 'desert-shores',
    name: 'Desert Shores',
    city: 'Las Vegas',
    zip: '89128',
    region: 'central-west',
    aliases: ['Desert Shores'],
    headline: 'Sell Your Desert Shores Home',
    subhead:
      'Four lakes, marina, and west-central location — list the water access your lot actually has.',
    intro:
      'Desert Shores is a west-central Las Vegas community with four lakes, a marina, and lakeside paths. Inventory includes waterfront, lake-view, and interior homes. Buyers compare The Lakes and Summerlin edges. Mislabeling waterfront is a fast way to lose the tour.',
    sellingAngle:
      'We classify the lot (waterfront, view, interior), pull matching comps, and market marina and path access with maps.',
    marketingPlan:
      'Lake and marina photography, honest lot classification in MLS, and alerts to Desert Shores saved searches.',
    amenities: [
      'Four community lakes',
      'Marina and paths',
      'Parks and recreation',
      '215 Beltway access',
      'Near Summerlin and The Lakes',
    ],
    commute: 'About 15–22 minutes to the Strip via the 215.',
    listingTips: [
      'Label waterfront vs. view vs. interior in the first sentence of remarks.',
      'Price each class separately.',
      'Document dock or slip rights if they convey.',
    ],
    nearby: ['the-lakes', 'summerlin', 'sun-city-summerlin', 'lone-mountain'],
  },
  {
    slug: 'aliante',
    name: 'Aliante',
    city: 'North Las Vegas',
    zip: '89084',
    region: 'north-las-vegas',
    aliases: ['Aliante'],
    headline: 'Sell Your Aliante Home',
    subhead:
      'North Las Vegas master plan with Aliante Casino and nature preserve nearby — list the amenity map, then beat competing NLV inventory on price.',
    intro:
      'Aliante is a master-planned community in North Las Vegas with parks, trails, Aliante Casino + Hotel, and the Nature Discovery Park. Production housing dominates. Buyers often compare Craig Ranch and Centennial Hills. Presentation and first-weekend price decide most outcomes.',
    sellingAngle:
      'We sell Nature Discovery Park and trail access with a list price that wins against the other Aliante actives — not against a Las Vegas valley average.',
    marketingPlan:
      'Park and trail photo set, floor-plan-accurate copy, and MLS alerts to North Las Vegas saved searches.',
    amenities: [
      'Nature Discovery Park',
      'Aliante Casino + Hotel nearby',
      'Trails and community parks',
      'I-215 and US-95 access',
      'Production floor plans',
    ],
    commute: 'About 20–30 minutes to the Strip via I-215 / I-15.',
    listingTips: [
      'Price against current Aliante actives of the same plan.',
      'Show park distance from the lot.',
      'Disclose HOA and any remaining assessments.',
    ],
    nearby: ['craig-ranch', 'trilogy-sunstone', 'centennial-hills', 'providence'],
  },
  {
    slug: 'craig-ranch',
    name: 'Craig Ranch',
    city: 'North Las Vegas',
    zip: '89081',
    region: 'north-las-vegas',
    aliases: ['Craig Ranch'],
    headline: 'Sell Your Craig Ranch Home',
    subhead:
      'North Las Vegas around Craig Ranch Regional Park — list park access and tract comps, not a generic NLV headline.',
    intro:
      'Craig Ranch sits in North Las Vegas near Craig Ranch Regional Park, with trails, sports facilities, and nearby production housing. Buyers compare Aliante and older North Las Vegas tracts. Park proximity is a real filter — only claim it if the walk or drive is accurate.',
    sellingAngle:
      'We map the park relationship, pull tract comps, and launch at a number that survives a Saturday of competing NLV listings.',
    marketingPlan:
      'Regional park photography, tract-accurate remarks, and syndication for Craig Ranch and North Las Vegas searches.',
    amenities: [
      'Craig Ranch Regional Park',
      'Trails and sports facilities',
      'North Las Vegas retail nearby',
      'I-215 access',
      'Mix of newer production housing',
    ],
    commute: 'About 18–28 minutes to the Strip via I-15 / I-215.',
    listingTips: [
      'State actual minutes to the park, not “near.”',
      'Match year-built when pulling comps.',
      'Fix curb appeal — park-area buyers tour several homes in one loop.',
    ],
    nearby: ['aliante', 'waterfall', 'trilogy-sunstone', 'north-las-vegas'],
  },
  {
    slug: 'trilogy-sunstone',
    name: 'Trilogy at Sunstone',
    city: 'North Las Vegas',
    zip: '89084',
    region: 'north-las-vegas',
    aliases: ['Trilogy at Sunstone', 'Trilogy Sunstone'],
    headline: 'Sell Your Trilogy at Sunstone Home',
    subhead:
      '55+ resort community in North Las Vegas — list to age-qualified buyers comparing floor plans and amenity access.',
    intro:
      'Trilogy at Sunstone is a Shea 55+ community in North Las Vegas with resort amenities, golf-adjacent living, and a defined model inventory. The buyer pool is age-qualified and already comparing other active-adult communities in the valley.',
    sellingAngle:
      'We market by model name, amenity walk, and renovation level to 55+ buyers already shopping Trilogy and Sun City alternatives.',
    marketingPlan:
      'Amenity campus photography, model-accurate MLS remarks, and outreach to 55+ relocation searches.',
    amenities: [
      'Age-qualified 55+ community',
      'Resort clubhouse, pools, and fitness',
      'Social clubs',
      'Golf-adjacent setting',
      'North Las Vegas location',
    ],
    commute: 'About 25–35 minutes to the Strip via I-215 / I-15.',
    listingTips: [
      'Name the floor plan — 55+ buyers search by model.',
      'Confirm occupancy rules before listing.',
      'Price against Trilogy comps, not nearby non-age-qualified tracts.',
    ],
    nearby: ['sunstone', 'aliante', 'craig-ranch', 'waterfall'],
  },
  {
    slug: 'sunstone',
    name: 'Sunstone',
    city: 'North Las Vegas',
    zip: '89084',
    region: 'north-las-vegas',
    aliases: ['Sunstone'],
    headline: 'Sell Your Sunstone Home',
    subhead:
      'North Las Vegas community with 55+ and open-age product nearby — name the exact village so buyers are not confused.',
    intro:
      'Sunstone in North Las Vegas includes multiple product types, including Trilogy at Sunstone. Mixing those comparable sets is a common listing error. We identify the exact village and HOA before photography.',
    sellingAngle:
      'Clear village identity plus comps from the same HOA — then a launch that ranks for Sunstone and the village name.',
    marketingPlan:
      'Village-specific photo set, precise MLS community name, and buyer alerts for 89084.',
    amenities: [
      'North Las Vegas master-plan amenities',
      'Nearby 55+ and open-age villages',
      'Parks and trails by village',
      'I-215 access',
      'Aliante corridor nearby',
    ],
    commute: 'About 25–35 minutes to the Strip.',
    listingTips: [
      'Never blend Trilogy comps with open-age Sunstone comps.',
      'State HOA name exactly as the association files it.',
      'Show amenity access from the lot.',
    ],
    nearby: ['trilogy-sunstone', 'aliante', 'craig-ranch', 'waterfall'],
  },
  {
    slug: 'waterfall',
    name: 'Waterfall',
    city: 'North Las Vegas',
    zip: '89084',
    region: 'north-las-vegas',
    aliases: ['Waterfall'],
    headline: 'Sell Your Waterfall Home',
    subhead:
      'North Las Vegas production community — beat competing new and resale inventory with condition and a tight list price.',
    intro:
      'Waterfall is a North Las Vegas community with newer production homes. Resales compete with builder inventory and nearby Aliante product. Buyers tour quickly; the listing that is move-in ready and priced to the last same-plan close gets the offer.',
    sellingAngle:
      'Same-plan comps, punch-list before photos, and a first-weekend price that does not ask buyers to wait for a reduction.',
    marketingPlan:
      'Bright, floor-plan-accurate photography and MLS keywords for Waterfall and North Las Vegas resale searches.',
    amenities: [
      'Community parks',
      'Newer production housing',
      'North Las Vegas retail nearby',
      'I-215 access',
      'Proximity to Aliante amenities',
    ],
    commute: 'About 22–32 minutes to the Strip via I-215 / I-15.',
    listingTips: [
      'Check builder incentives on competing new homes before pricing.',
      'Complete paint and landscape before the photo shoot.',
      'Disclose HOA and remaining assessments.',
    ],
    nearby: ['craig-ranch', 'aliante', 'sunstone', 'trilogy-sunstone'],
  },
  {
    slug: 'north-las-vegas',
    name: 'North Las Vegas',
    city: 'North Las Vegas',
    zip: '89032',
    region: 'north-las-vegas',
    aliases: ['North Las Vegas'],
    headline: 'Sell Your North Las Vegas Home',
    subhead:
      'A city of distinct communities — we list your tract, not a generic NLV headline.',
    intro:
      'North Las Vegas includes Aliante, Craig Ranch, older central tracts, and newer master plans. Comps do not travel across those lines. A listing that says only “North Las Vegas” underperforms one that names the park, tract, and commute.',
    sellingAngle:
      'Tract-level pricing, honest commute times to the Strip and employment centers, and marketing that ranks for the community buyers actually search.',
    marketingPlan:
      'Neighborhood-accurate media, city-and-tract MLS naming, and outreach across NLV saved searches.',
    amenities: [
      'Craig Ranch Regional Park',
      'Aliante Nature Discovery Park',
      'I-15 and I-215 access',
      'City parks by tract',
      'Newer master plans and established streets',
    ],
    commute: 'About 15–35 minutes to the Strip depending on tract and freeway.',
    listingTips: [
      'Name the subdivision in MLS.',
      'Do not use Aliante comps for central NLV product.',
      'Lead with lot, parking, and HVAC/roof facts buyers ask first.',
    ],
    nearby: ['aliante', 'craig-ranch', 'waterfall', 'centennial-hills'],
  },
  {
    slug: 'henderson',
    name: 'Henderson',
    city: 'Henderson',
    zip: '89052',
    region: 'henderson',
    aliases: ['Henderson'],
    headline: 'Sell Your Henderson Home',
    subhead:
      'Green Valley to Anthem to Lake Las Vegas — Henderson listings sell when they name the community, not just the city.',
    intro:
      'Henderson is a separate city on the southeast side of the valley with Green Valley, Anthem, Inspirada, Seven Hills, MacDonald Highlands, and Lake Las Vegas. Each has its own HOA, amenity, and comparable set. A city-wide median is not a pricing strategy.',
    sellingAngle:
      'We identify the community, pull matching comps, and market Henderson’s 215 / I-215 access and community amenities the buyer already filtered for.',
    marketingPlan:
      'Community-specific photography, Henderson MLS area naming, and syndication that still ranks for the village name.',
    amenities: [
      'Green Valley Ranch and District corridors',
      'Anthem and Inspirada recreation',
      'Lake Las Vegas waterfront pockets',
      '215 Beltway access',
      'City parks and trail systems by community',
    ],
    commute: 'About 20–35 minutes to the Strip via I-215, depending on community.',
    listingTips: [
      'Always name the master plan or tract.',
      'Henderson luxury and production do not share comps.',
      'Disclose city taxes and HOA separately from Las Vegas listings.',
    ],
    nearby: ['green-valley', 'anthem', 'inspirada', 'seven-hills', 'lake-las-vegas'],
  },
  {
    slug: 'green-valley',
    name: 'Green Valley',
    city: 'Henderson',
    zip: '89014',
    region: 'henderson',
    aliases: ['Green Valley', 'Green Valley Ranch'],
    headline: 'Sell Your Green Valley Home',
    subhead:
      'Established Henderson master plan — District, parks, and 215 access are the listing, priced tract by tract.',
    intro:
      'Green Valley is an established Henderson master plan with The District at Green Valley Ranch, parks, and a wide range of housing ages. Buyers compare Anthem and central Henderson. Tract and year built change value more than the “Green Valley” label.',
    sellingAngle:
      'We sell District proximity and park access with tract comps so your home is not priced against a different decade of construction.',
    marketingPlan:
      'District and park photography, tract-accurate remarks, and Henderson saved-search alerts.',
    amenities: [
      'The District at Green Valley Ranch',
      'Green Valley Ranch Resort nearby',
      'Parks and trails',
      '215 Beltway access',
      'Established master-plan layout',
    ],
    commute: 'About 20–28 minutes to the Strip via I-215.',
    listingTips: [
      'Match year-built when selecting comps.',
      'Call out updates versus original finishes.',
      'State HOA and any neighborhood sub-association.',
    ],
    nearby: ['henderson', 'anthem', 'seven-hills', 'macdonald-ranch'],
  },
  {
    slug: 'anthem',
    name: 'Anthem',
    city: 'Henderson',
    zip: '89052',
    region: 'henderson',
    aliases: ['Anthem', 'Anthem Country Club', 'Anthem Highlands'],
    headline: 'Sell Your Anthem Home',
    subhead:
      'Henderson master plan with country-club and open villages — list the exact Anthem community buyers filtered for.',
    intro:
      'Anthem in Henderson includes Anthem Country Club, Anthem Heights, and related villages with parks, trails, and elevated lots. Guard-gated golf product and open villages do not share comps. Elevation and view corridors matter on the south ridgeline.',
    sellingAngle:
      'We name the village, separate gated golf from open product, and market Henderson ridgeline living with drone when the lot earns it.',
    marketingPlan:
      'Village-accurate media, country-club outreach where applicable, and MLS naming that matches how buyers search Anthem.',
    amenities: [
      'Anthem Country Club (select villages)',
      'Parks, trails, and recreation centers',
      'Elevated lots and city views on select streets',
      'Henderson 215 access',
      'Nearby St. Rose corridor',
    ],
    commute: 'About 25–35 minutes to the Strip via I-215.',
    listingTips: [
      'Never mix Country Club comps with open-village comps.',
      'Document view corridors.',
      'Disclose all HOAs — master plus village.',
    ],
    nearby: ['inspirada', 'seven-hills', 'green-valley', 'henderson'],
  },
  {
    slug: 'inspirada',
    name: 'Inspirada',
    city: 'Henderson',
    zip: '89044',
    region: 'henderson',
    aliases: ['Inspirada'],
    headline: 'Sell Your Inspirada Home',
    subhead:
      'Walkable Henderson master plan — list cafe-row and park access, then price against same-plan resales and any builder remainder.',
    intro:
      'Inspirada is a newer Henderson master plan designed around a walkable town center, parks, and production housing. Resales compete with remaining new construction. Buyers compare Anthem and southern Henderson.',
    sellingAngle:
      'We price against builder incentives and same-plan closings, then sell walkability to the town center with a measured distance from your lot.',
    marketingPlan:
      'Town-center and park photography, floor-plan-accurate copy, and 89044 buyer alerts.',
    amenities: [
      'Walkable town center',
      'Parks and trails',
      'Community recreation',
      'Newer construction',
      'Southern Henderson location',
    ],
    commute: 'About 28–38 minutes to the Strip via I-15 / I-215.',
    listingTips: [
      'Check live builder specials before listing.',
      'Measure town-center walk, do not estimate.',
      'Call out window coverings, landscape, and blinds builders often exclude.',
    ],
    nearby: ['anthem', 'southern-highlands', 'henderson', 'seven-hills'],
  },
  {
    slug: 'lake-las-vegas',
    name: 'Lake Las Vegas',
    city: 'Henderson',
    zip: '89011',
    region: 'henderson',
    aliases: ['Lake Las Vegas'],
    headline: 'Sell Your Lake Las Vegas Home',
    subhead:
      'Waterfront, hillside, and village product — each needs its own comparable set and a listing that shows the water honestly.',
    intro:
      'Lake Las Vegas in Henderson includes waterfront condos, hillside homes, and village product around the lake. Buyers compare marina access, HOA, and view. Mis-tagging waterfront is the fastest way to burn a showing.',
    sellingAngle:
      'We classify the product (waterfront, view, village interior), pull matching comps, and market the lake with drone and dock facts.',
    marketingPlan:
      'Water and village photography, luxury outreach for waterfront, and MLS remarks that state HOA and marina rules.',
    amenities: [
      'Private lake and marina pockets',
      'Village retail and dining',
      'Golf nearby',
      'Henderson location',
      'Trails around the lake',
    ],
    commute: 'About 25–35 minutes to the Strip via Lake Mead Pkwy / I-515.',
    listingTips: [
      'Label waterfront vs. view vs. village interior in the first remark.',
      'Disclose HOA, marina, and rental rules.',
      'Price condos and single-family on separate tracks.',
    ],
    nearby: ['henderson', 'green-valley', 'macdonald-ranch'],
  },
  {
    slug: 'seven-hills',
    name: 'Seven Hills',
    city: 'Henderson',
    zip: '89052',
    region: 'henderson',
    aliases: ['Seven Hills'],
    headline: 'Sell Your Seven Hills Home',
    subhead:
      'Gated Henderson community with elevated lots — city and Strip views are the listing when the lot actually has them.',
    intro:
      'Seven Hills is a gated Henderson community with elevated lots, parks, and a mix of production and custom homes. View corridors toward the Strip and valley floor drive premiums. Buyers compare Anthem and MacDonald Ranch.',
    sellingAngle:
      'We sell elevation and view with twilight photography and comps limited to similar view lots inside Seven Hills.',
    marketingPlan:
      'Twilight and drone of the view, gated-community video, and Henderson luxury/move-up outreach.',
    amenities: [
      'Gated community',
      'Elevated lots and views on select streets',
      'Parks and trails',
      'Henderson 215 access',
      'Near St. Rose Parkway',
    ],
    commute: 'About 22–32 minutes to the Strip via I-215.',
    listingTips: [
      'Do not advertise a Strip view the lot does not have.',
      'Separate view-lot comps from interior lots.',
      'Document HOA and gate procedures for showings.',
    ],
    nearby: ['anthem', 'green-valley', 'macdonald-ranch', 'henderson'],
  },
  {
    slug: 'macdonald-ranch',
    name: 'MacDonald Ranch',
    city: 'Henderson',
    zip: '89052',
    region: 'henderson',
    aliases: ['MacDonald Ranch', 'MacDonald Highlands'],
    headline: 'Sell Your MacDonald Ranch Home',
    subhead:
      'Henderson custom and production pockets — Highlands estates and Ranch production need different listing plans.',
    intro:
      'MacDonald Ranch and MacDonald Highlands sit in Henderson with production neighborhoods and ultra-custom hillside estates. Mixing those comps is a listing error. We identify the product type before we talk price.',
    sellingAngle:
      'Production listings compete on condition and tract comps. Highlands estates need luxury media and a high-net-worth outreach plan.',
    marketingPlan:
      'Product-type-specific photography, Henderson MLS naming, and luxury syndication when the home qualifies.',
    amenities: [
      'Henderson hillside and valley-floor pockets',
      'Near Green Valley and Seven Hills',
      'Custom estate inventory in Highlands',
      '215 Beltway access',
      'Parks by sub-neighborhood',
    ],
    commute: 'About 22–32 minutes to the Strip via I-215.',
    listingTips: [
      'Never average Highlands custom with Ranch production.',
      'For estates, lead with architecture and lot.',
      'For production, win the first weekend on price and condition.',
    ],
    nearby: ['seven-hills', 'green-valley', 'anthem', 'henderson'],
  },
  {
    slug: 'arcadia',
    name: 'Arcadia',
    city: 'Las Vegas',
    zip: '89141',
    region: 'southwest',
    aliases: ['Arcadia'],
    headline: 'Sell Your Arcadia Home',
    subhead:
      'Newer southwest community — resales compete with builder inventory, so condition and list price have to win week one.',
    intro:
      'Arcadia is a newer Las Vegas community with modern production homes. Buyers compare nearby southwest master plans. A resale that ignores builder incentives sits; a resale that shows completed landscaping and window coverings can beat a spec lot.',
    sellingAngle:
      'We price against live builder specials and recent Arcadia closings, then market the finished extras a new lot still needs.',
    marketingPlan:
      'Modern-interior photography, community amenity shots, and MLS keywords for Arcadia Las Vegas resale searches.',
    amenities: [
      'Newer construction',
      'Community recreation',
      'Southwest valley location',
      'I-15 / 215 access nearby',
      'Modern floor plans',
    ],
    commute: 'About 20–30 minutes to the Strip via I-15.',
    listingTips: [
      'Pull builder incentives the week you list.',
      'Photograph completed landscape and hardscape.',
      'Disclose HOA and remaining assessments.',
    ],
    nearby: ['southern-highlands', 'enterprise', 'mountains-edge'],
  },
  {
    slug: 'eagle-hills',
    name: 'Eagle Hills',
    city: 'Las Vegas',
    zip: '89134',
    region: 'summerlin-west',
    aliases: ['Eagle Hills'],
    headline: 'Sell Your Eagle Hills Home',
    subhead:
      'Established west-valley streets with mountain views on many lots — price to the tract, then sell the view you actually have.',
    intro:
      'Eagle Hills is an established Las Vegas neighborhood with mountain views on many lots and access toward Summerlin and the Strip. Housing is older than western master-plan product. Updates and view orientation drive the comparable set.',
    sellingAngle:
      'We sell view and update level with comps from the same tract — not new-construction Summerlin medians.',
    marketingPlan:
      'View photography at the right hour, update-focused interior shots, and MLS copy that names Eagle Hills.',
    amenities: [
      'Mountain views on select lots',
      'Established street grid',
      'Access toward Summerlin and the Strip',
      'Nearby parks',
      'Mix of single-story and two-story homes',
    ],
    commute: 'About 15–22 minutes to the Strip.',
    listingTips: [
      'Do not price against new Summerlin villages.',
      'Document roof, HVAC, and kitchen/bath updates.',
      'View lots need view comps.',
    ],
    nearby: ['summerlin', 'queensridge', 'the-lakes'],
  },
  {
    slug: 'emerson-estates',
    name: 'Emerson Estates',
    city: 'Las Vegas',
    zip: '89141',
    region: 'southwest',
    aliases: ['Emerson Estates'],
    headline: 'Sell Your Emerson Estates Home',
    subhead:
      'Custom lots and larger footprints — this is not production-home marketing.',
    intro:
      'Emerson Estates features custom and large-lot homes in the Las Vegas Valley. Buyers compare architecture, acreage, and privacy. Portal templates built for tract housing miss the product.',
    sellingAngle:
      'Luxury media, lot diagrams, and comps limited to custom product — then a showing plan that respects privacy.',
    marketingPlan:
      'Architectural photography, drone of the lot, and broker-to-broker outreach.',
    amenities: [
      'Custom homes',
      'Larger lots',
      'Southwest valley access',
      'Privacy and setbacks',
      'Distinctive architecture',
    ],
    commute: 'Drive times vary by exact street; we map yours on the listing.',
    listingTips: [
      'Lead with lot size and architecture.',
      'Pre-list inspections on custom systems.',
      'Do not use nearby production comps.',
    ],
    nearby: ['southern-highlands', 'arcadia', 'enterprise'],
  },
  {
    slug: 'consenza-estates',
    name: 'Consenza Estates',
    city: 'Las Vegas',
    zip: '89141',
    region: 'southwest',
    aliases: ['Consenza Estates'],
    headline: 'Sell Your Consenza Estates Home',
    subhead:
      'Gated premium community — buyers expect finish-level photography and a defensible custom-comp set.',
    intro:
      'Consenza Estates is a gated Las Vegas community with premium homes and desert views on select lots. The buyer pool is small. Marketing quality and comparable discipline matter more than listing volume.',
    sellingAngle:
      'A gated luxury launch with twilight sets and comps from peer gated communities — not a ZIP-wide average.',
    marketingPlan:
      'Luxury photography, gated-community video, and targeted high-intent ads.',
    amenities: [
      'Gated community',
      'Premium finishes',
      'Desert views on select lots',
      'Southwest valley location',
      'Privacy-focused streets',
    ],
    commute: 'Mapped per address on your listing.',
    listingTips: [
      'Price to gated premium comps.',
      'Stage outdoor living.',
      'Coordinate gate access for every tour.',
    ],
    nearby: ['emerson-estates', 'southern-highlands', 'arcadia'],
  },
  {
    slug: 'log-cabin-ranch',
    name: 'Log Cabin Ranch',
    city: 'Las Vegas',
    zip: '89124',
    region: 'northwest',
    aliases: ['Log Cabin Ranch'],
    headline: 'Sell Your Log Cabin Ranch Home',
    subhead:
      'Equestrian and large-lot property — list acreage, zoning, and outbuildings with rural comps, not tract housing.',
    intro:
      'Log Cabin Ranch is known for larger lots and equestrian-friendly properties. Buyers filter for acreage, well/septic or municipal services, and barn or arena improvements. A standard residential flyer does not answer those questions.',
    sellingAngle:
      'We document lot size, outbuildings, and use restrictions, then market to buyers already searching horse property and large lots in the Las Vegas Valley.',
    marketingPlan:
      'Drone of the acreage, outbuilding inventory, and MLS remarks that include equestrian keywords when they apply.',
    amenities: [
      'Larger lots',
      'Equestrian potential on qualifying parcels',
      'Desert and mountain setting',
      'Privacy versus tract housing',
      'Northwest valley location',
    ],
    commute: 'Mapped per address; this pocket is farther from the Strip than master-plan ZIPs.',
    listingTips: [
      'State utilities, zoning, and HOA or lack of HOA clearly.',
      'Inventory every outbuilding.',
      'Do not use production-home comps.',
    ],
    nearby: ['lone-mountain', 'centennial-hills', 'tule-springs'],
  },
  {
    slug: 'shawood',
    name: 'Shawood',
    city: 'Las Vegas',
    zip: '89166',
    region: 'northwest',
    aliases: ['Shawood'],
    headline: 'Sell Your Shawood Home',
    subhead:
      'Growing northwest community — resales compete with new construction, so launch ready and priced to the last close.',
    intro:
      'Shawood is a growing Las Vegas community with new construction and early resales. Buyers compare nearby northwest master plans. A listing that looks unfinished next to a model home will sit.',
    sellingAngle:
      'Finished extras versus builder spec, same-plan comps, and a price that does not ask buyers to wait for a cut.',
    marketingPlan:
      'Bright photography, community keywords, and northwest buyer alerts.',
    amenities: [
      'Newer homes',
      'Northwest valley location',
      'Community amenities by tract',
      'US-95 corridor access',
      'Mix of new and resale inventory',
    ],
    commute: 'About 25–35 minutes to the Strip via US-95.',
    listingTips: [
      'Compare to live builder inventory the week you list.',
      'Complete landscape before photos.',
      'Disclose HOA and assessments.',
    ],
    nearby: ['skye-canyon', 'centennial-hills', 'providence'],
  },
];

export function getAllNeighborhoods(): Neighborhood[] {
  return NEIGHBORHOODS;
}

export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return NEIGHBORHOODS.find((n) => n.slug === slug);
}

export function getNeighborhoodsByRegion(): {
  region: NeighborhoodRegion;
  label: string;
  neighborhoods: Neighborhood[];
}[] {
  const order: NeighborhoodRegion[] = [
    'summerlin-west',
    'northwest',
    'southwest',
    'north-las-vegas',
    'henderson',
    'central-west',
  ];

  return order.map((region) => ({
    region,
    label: REGION_LABELS[region],
    neighborhoods: NEIGHBORHOODS.filter((n) => n.region === region),
  }));
}

export function findNeighborhoodForName(name: string): Neighborhood | undefined {
  const needle = name.trim().toLowerCase();
  return NEIGHBORHOODS.find(
    (n) =>
      n.name.toLowerCase() === needle ||
      n.aliases.some((alias) => alias.toLowerCase() === needle),
  );
}

export function getRelatedNeighborhoods(neighborhood: Neighborhood): Neighborhood[] {
  return neighborhood.nearby
    .map((slug) => getNeighborhoodBySlug(slug))
    .filter((n): n is Neighborhood => Boolean(n));
}
