export type Borough = {
  id: string;
  name: string;
  label: string; // used mid-sentence: "in the Bronx"
  metaDescription: string;
  intro: string[];
  audiences: { title: string; text: string }[];
  situations: { title: string; text: string }[];
  access: string[];
  gettingAround: { title: string; text: string }[];
  neighborhoods: { name: string; note: string }[];
  faqs: { q: string; a: string }[];
  nearby: { id: string; text: string }[];
};

// Text fields may contain inline links in the form [label](/path). Use plain() to strip them for JSON-LD.

export const boroughs: Borough[] = [
  {
    id: 'manhattan',
    name: 'Manhattan',
    label: 'Manhattan',
    metaDescription:
      'Locked out in Manhattan? Mobile car unlock, key replacement and ignition repair from the Financial District to Inwood, including garages and busy curbs. Call 24/7 for a live ETA.',
    intro: [
      `Manhattan lockouts rarely happen in a driveway. They happen on a curb in Midtown, on a garage ramp on the Upper West Side, or outside a restaurant in the West Village, with traffic moving around the car. Quick Car Unlock sends an insured mobile locksmith to your vehicle anywhere on the island, from the Financial District to Inwood.`,
      `Call (347) 801-7119. The dispatcher takes your cross streets and your vehicle's year, make and model, gives you an ETA before anyone is sent, and quotes the price before work begins.`,
    ],
    audiences: [
      {
        title: 'Commuters parked in garages and on the street',
        text: `If you park in Midtown, the Financial District or Hudson Yards, a lockout usually means a missed meeting or a late train. What helps most is a firm ETA and a price you can approve before anyone is sent. Give the dispatcher the garage name and level, or the cross street and side of the street, and see our guide on [what a car unlock costs in NYC](/guides/how-much-does-it-cost-to-unlock-a-car-nyc).`,
      },
      {
        title: 'Owners of European luxury cars',
        text: `Manhattan has a high share of Audi, BMW, Mercedes and other European models with keyless entry and high-security locks. A lockout is often followed by a lost-fob problem. Tell the dispatcher the exact year, make and model so they can say what can be done on-site, including [key replacement and fob programming](/services/key-replacement).`,
      },
      {
        title: 'Rideshare, delivery and livery drivers',
        text: `When the car is how you earn, every minute counts. Ask for the ETA first, and keep a spare key somewhere safe that is not in the vehicle. If your key will not turn after the lock is open, read about [ignition repair](/services/ignition-repair).`,
      },
      {
        title: 'Visitors and rental-car drivers',
        text: `If you do not know the area, share a landmark and the nearest cross street. For a rental, call the rental company too: some rental agreements and roadside plans cover lockouts. Ask the dispatcher what proof of authorization they need for a rental vehicle.`,
      },
    ],
    situations: [
      {
        title: 'Parked on a busy avenue or crosstown street',
        text: `Tell the dispatcher the exact block and which side of the street the car is on. If the car is in a no-standing, loading or bus-lane zone, say so on the call so the technician can plan where to stop.`,
      },
      {
        title: 'Keys locked in a car in a garage',
        text: `Many Manhattan cars sit in attended garages. If an attendant holds a key, ask them first. If the key is inside a locked car, give the dispatcher the garage name and level. Garages set their own rules for outside service providers, so confirm with the attendant before the technician arrives.`,
      },
      {
        title: 'After a show, dinner or game',
        text: `The Theater District, Chelsea, the Village and the area around Madison Square Garden fill up at night. Share a nearby landmark as well as the address, and keep your phone on so the technician can call when they are close.`,
      },
      {
        title: 'Lost or broken key, not just a lockout',
        text: `Push-to-start fobs and transponder keys are common here. If you have no spare, we can discuss on-site replacement. See our [lost key guide](/guides/lost-car-key-no-spare).`,
      },
      {
        title: 'Keys locked in the trunk',
        text: `If you loaded the trunk and the doors locked behind you, a technician can usually open a door and use the interior release. See [keys locked in the trunk](/guides/keys-locked-in-trunk).`,
      },
      {
        title: 'Child or pet inside the car',
        text: `This is an emergency. Call 911 first. Read more on [when police or fire will help](/guides/will-police-unlock-my-car).`,
      },
    ],
    access: [
      `Check the street signs for alternate-side parking times and tell the dispatcher if your car has to move soon.`,
      `Have a photo ID and your registration or insurance card showing your name. We confirm ownership before opening any vehicle.`,
      `In a garage, bring your ticket and the level or space number.`,
      `Say whether the car is a keyless push-to-start model, since that changes the approach.`,
      `Ask for the total price on the call, including any after-hours charge.`,
    ],
    gettingAround: [
      {
        title: 'Avenues, crosstown streets and one-way blocks',
        text: `Midtown crosstown traffic moves slowly at most hours, and the one-way grid affects which direction a technician can approach. The dispatcher uses your cross streets to estimate the ETA.`,
      },
      {
        title: 'FDR Drive and the West Side Highway',
        text: `The two highways that wrap the island are the fastest way up and down Manhattan when they are moving, and the slowest when they are not. Rush hour and incidents change the ETA, which is why it is given on the call and not promised in advance.`,
      },
      {
        title: 'Bridges and tunnels',
        text: `Traffic funneling to the Lincoln, Holland and Midtown tunnels and the East River bridges can add time near the edges of the island. If you are near a crossing, mention it.`,
      },
    ],
    neighborhoods: [
      { name: 'Financial District', note: 'Narrow streets and tight garages, so exact location matters.' },
      { name: 'Tribeca and SoHo', note: 'Cobblestone blocks and loading zones; share the nearest cross street.' },
      { name: 'Greenwich Village and the West Village', note: 'Irregular street grid and busy dining blocks at night.' },
      { name: 'Chelsea and Hudson Yards', note: 'Event traffic and large garages near the High Line and Javits Center.' },
      { name: 'Midtown and the Theater District', note: 'Penn Station, Grand Central and Times Square, where curb space is scarce.' },
      { name: 'Murray Hill and Gramercy', note: 'Mix of street parking and small garages.' },
      { name: 'Upper East Side', note: 'Mostly street parking with alternate-side rules.' },
      { name: 'Upper West Side', note: 'Street parking plus many residential garages.' },
      { name: 'Harlem', note: 'Street parking near Central Park North, the Apollo and 125th Street.' },
      { name: 'Washington Heights and Inwood', note: 'Hilly blocks near the George Washington Bridge approach.' },
    ],
    faqs: [
      {
        q: `Can you unlock a car that is parked in a Manhattan garage?`,
        a: `In many cases, yes, with the garage's permission. Give the dispatcher the garage name and your level. Garages set their own rules for outside service providers, so check with the attendant first.`,
      },
      {
        q: `What if my car is double-parked or in a no-standing zone?`,
        a: `Tell the dispatcher when you call. A lockout in a restricted zone can still be done, but the technician needs to know where they can safely stop and how long the car can stay there.`,
      },
      {
        q: `Do you work on European luxury cars like Audi, BMW and Mercedes?`,
        a: `Many of these models use high-security locks and keyless systems. Give the dispatcher the exact year, make and model so they can tell you what can be done on-site.`,
      },
      {
        q: `I lost my push-to-start fob. Can a new one be made on the street?`,
        a: `Often it can, depending on the vehicle. Programming depends on make, model and year, and some cars need extra steps. Call with your details for a straight answer and a quote. See [car key replacement and fob programming](/services/key-replacement).`,
      },
      {
        q: `What do I need to show before you open the car?`,
        a: `A valid photo ID and proof the vehicle is yours, such as the registration or an insurance card with your name.`,
      },
      {
        q: `I am a visitor in a rental car. Can you still help?`,
        a: `Call the rental company as well, since some rental plans cover lockouts. Ask the dispatcher what proof of authorization is needed for a rental vehicle.`,
      },
      {
        q: `How do I give my location when I am in a crowded area like Times Square?`,
        a: `Give the nearest cross street, which side of the street the car is on, and a landmark. Keep your phone on so the technician can call when they are close.`,
      },
      {
        q: `Will the police or fire department unlock my car?`,
        a: `Generally not for a routine lockout. If a child, person or pet is trapped inside, call 911 immediately. See [when police or fire will help](/guides/will-police-unlock-my-car).`,
      },
    ],
    nearby: [
      { id: 'brooklyn', text: `Parked just across the East River? We also serve [car unlocks in Brooklyn](/locations/brooklyn), including DUMBO, Downtown Brooklyn and Williamsburg.` },
      { id: 'queens', text: `Across the river in Long Island City or Astoria, see [car unlock service in Queens](/locations/queens).` },
      { id: 'bronx', text: `North of Harlem, our [Bronx service area](/locations/bronx) covers the Concourse and Yankee Stadium.` },
    ],
  },
  {
    id: 'brooklyn',
    name: 'Brooklyn',
    label: 'Brooklyn',
    metaDescription:
      'Car locked out in Brooklyn? Mobile car unlock, key replacement and ignition repair in Williamsburg, Park Slope, Flatbush, Bay Ridge and beyond. Insured technicians, 24/7. Call for a live ETA.',
    intro: [
      `Brooklyn is the most populous borough, and most cars here live on the street. That means lockouts happen on narrow rowhouse blocks, outside Prospect Park, near the Barclays Center, and on the long avenues that run to Coney Island. Quick Car Unlock sends an insured mobile locksmith to your vehicle anywhere in Brooklyn.`,
      `Call (347) 801-7119. The dispatcher asks for the nearest cross streets and your vehicle details, gives you an ETA, and quotes the price before work starts.`,
    ],
    audiences: [
      {
        title: 'Residents who park on the street',
        text: `If your car lives on the block, you are the most likely to be locked out near home, often with groceries, kids or a deadline. Give the dispatcher the block, the side of the street and any alternate-side parking time, and ask for the price up front. See [what a car unlock costs](/guides/how-much-does-it-cost-to-unlock-a-car-nyc).`,
      },
      {
        title: 'Nightlife and event-goers',
        text: `Williamsburg, Greenpoint, Bushwick and the Barclays Center area get crowded at night. At 2 AM trust matters as much as speed: ask for the ETA and the total price before anyone is sent.`,
      },
      {
        title: 'Parents and families',
        text: `If a child is in the car, call 911 first. Otherwise, a quick plan helps: keep the spare key in a known place, and see our [guide on locked keys](/guides/locked-keys-in-car-what-to-do).`,
      },
      {
        title: 'Rideshare drivers and small-business vans',
        text: `Downtime costs money. If a key snapped or the ignition will not turn, mention it on the call, since that may be an [ignition repair](/services/ignition-repair) and not only a lockout.`,
      },
    ],
    situations: [
      {
        title: 'Parked on a residential block',
        text: `Brooklyn blocks often have cars parked bumper to bumper. Tell the dispatcher the block, the side of the street and the car in front of or behind yours if it helps, so the technician can find you quickly.`,
      },
      {
        title: 'Alternate-side parking and street cleaning',
        text: `If your car has to move by a certain time, mention it on the call. A lockout is easier to solve before a street-cleaning window than during one.`,
      },
      {
        title: 'Nightlife and event nights',
        text: `Share an intersection and a landmark, and keep your phone on so the technician can reach you.`,
      },
      {
        title: 'Key broken in the door or ignition',
        text: `A snapped key can often be extracted without replacing the lock. Describe what happened and keep the broken pieces.`,
      },
      {
        title: 'Lost key with no spare',
        text: `If you cannot find your only key, you may need a new one made. See [what to do after losing your only key](/guides/lost-car-key-no-spare).`,
      },
      {
        title: 'Beach, park and stadium days',
        text: `Coney Island, Brighton Beach and Prospect Park fill up in summer, and so do the roads. Mention the crowds when you call so the ETA is realistic.`,
      },
    ],
    access: [
      `Give the block, the side of the street and the nearest cross street.`,
      `Have a photo ID and your registration or insurance card showing your name.`,
      `Tell the dispatcher your vehicle's year, make and model, and whether it uses a push-to-start fob.`,
      `If the car is in a shared driveway or private lot, say so and share any gate or access instructions.`,
      `Ask for the total price on the call before anyone is sent.`,
    ],
    gettingAround: [
      {
        title: 'The BQE and the Gowanus Expressway',
        text: `The Brooklyn-Queens Expressway and the Gowanus run through much of the borough and are often congested. Your ETA depends heavily on which side of them you are on.`,
      },
      {
        title: 'Narrow streets and one-ways',
        text: `Rowhouse neighborhoods like Park Slope, Bed-Stuy and Crown Heights have one-way streets and double-parked cars that slow the last block.`,
      },
      {
        title: 'Crossings to Manhattan and Staten Island',
        text: `The Brooklyn, Manhattan and Williamsburg bridges and the Battery tunnel pull traffic toward the edges. In the south, the Verrazzano approach affects Bay Ridge and Sunset Park.`,
      },
    ],
    neighborhoods: [
      { name: 'Williamsburg and Greenpoint', note: 'Dense nightlife blocks near the waterfront and Bedford Avenue.' },
      { name: 'Bushwick and Bed-Stuy', note: 'Rowhouse streets with mostly street parking.' },
      { name: 'Park Slope and Prospect Heights', note: 'Tree-lined blocks near Prospect Park and the Barclays Center.' },
      { name: 'Crown Heights', note: 'Busy avenues with a mix of street and driveway parking.' },
      { name: 'Flatbush and Ditmas Park', note: 'Large houses with driveways alongside tight street parking.' },
      { name: 'Bay Ridge and Sunset Park', note: 'Long avenues and hilly side streets near the Verrazzano approach.' },
      { name: 'Coney Island and Brighton Beach', note: 'Crowded lots and streets in summer.' },
      { name: 'Downtown Brooklyn and DUMBO', note: 'Garages, cobblestone blocks and heavy foot traffic.' },
      { name: 'Canarsie and East New York', note: 'Residential blocks and larger lots in the eastern part of the borough.' },
      { name: 'Red Hook and Gowanus', note: 'Industrial streets and waterfront lots with limited foot traffic.' },
    ],
    faqs: [
      {
        q: `I locked my keys in my car near Williamsburg late at night. Can you come?`,
        a: `We are available 24/7. Call, share the nearest intersection and a landmark, and the dispatcher will give you an ETA before sending anyone.`,
      },
      {
        q: `Can you reach a car parked on a narrow Brooklyn street?`,
        a: `Yes. A lockout is done at the car, so a narrow street is fine. Tell the dispatcher the block and side of the street so the technician can stop as close as possible.`,
      },
      {
        q: `Do you serve areas like Canarsie, East New York or Flatlands?`,
        a: `Brooklyn is covered. Call with your location and the dispatcher will confirm the ETA for that area.`,
      },
      {
        q: `My older car has manual locks. Is that harder?`,
        a: `Not usually. Older vehicles with manual lock rods can often be opened without damage. Tell the dispatcher the year and model.`,
      },
      {
        q: `My key broke off in the lock. Can you help?`,
        a: `In many cases a broken key can be extracted without replacing the lock. Call and describe what happened, and we will tell you what to expect. See [ignition repair](/services/ignition-repair) if it is in the ignition.`,
      },
      {
        q: `What do I do about alternate-side parking while I wait?`,
        a: `Tell the dispatcher the street-cleaning time on your block. The wait and the parking rules are separate problems, and the dispatcher can tell you whether the ETA fits.`,
      },
      {
        q: `Is it cheaper to call roadside assistance?`,
        a: `It can be if your plan covers lockouts, but check the wait time. See [what a car unlock costs in NYC](/guides/how-much-does-it-cost-to-unlock-a-car-nyc).`,
      },
      {
        q: `Can you make me a new key if I lost my only one?`,
        a: `For many vehicles, yes. It depends on make, model and year. See [car key replacement](/services/key-replacement).`,
      },
    ],
    nearby: [
      { id: 'manhattan', text: `Just over the bridges? Our [Manhattan service area](/locations/manhattan) covers Lower Manhattan, Midtown and uptown.` },
      { id: 'queens', text: `On the Queens border near Greenpoint or Ridgewood? See [car unlock service in Queens](/locations/queens).` },
      { id: 'staten-island', text: `Across the Verrazzano? We also serve [Staten Island](/locations/staten-island).` },
    ],
  },
  {
    id: 'queens',
    name: 'Queens',
    label: 'Queens',
    metaDescription:
      'Locked out in Queens? Mobile car unlock, key replacement and ignition repair in Astoria, Flushing, Jamaica, LIC and near JFK and LaGuardia. Insured technicians, 24/7. Call for a live ETA.',
    intro: [
      `Queens is the largest borough by area and one of the most car-dependent parts of the city. A lockout can happen on an Astoria side street, in a Flushing parking lot, in a Bayside driveway, or in a long-term lot near JFK or LaGuardia. Quick Car Unlock sends an insured mobile locksmith to your vehicle across the borough.`,
      `Call (347) 801-7119. Because Queens is so spread out, the ETA depends heavily on where you are. The dispatcher gives you a live ETA on the call, before anyone is sent, and quotes the price before work begins.`,
    ],
    audiences: [
      {
        title: 'Travelers and airport-area drivers',
        text: `Coming back from a trip to a locked car, or a car with no key, is a common Queens problem. Tell the dispatcher the lot name, level and space, and check the lot operator's rules for outside service providers. If the key is gone, see our guide to [losing your only key](/guides/lost-car-key-no-spare).`,
      },
      {
        title: 'Families with driveway and street cars',
        text: `In Bayside, Forest Hills and the southeast part of the borough, many lockouts are at home. Share any gate or access details. A spare key kept outside the car is the cheapest fix, so see [what to do right now](/guides/locked-keys-in-car-what-to-do).`,
      },
      {
        title: 'Shop owners and commuters in Flushing and Jackson Heights',
        text: `Busy lots and tight street parking make the exact location important. Give the nearest cross street and the name of the business you are parked by. For a firm number, see [car unlock costs](/guides/how-much-does-it-cost-to-unlock-a-car-nyc).`,
      },
      {
        title: 'Event-goers near Citi Field and Flushing Meadows',
        text: `Game and event days fill the lots and clog the roads. Mention the event and your lot or gate on the call so the ETA is realistic.`,
      },
    ],
    situations: [
      {
        title: 'Airport parking at JFK and LaGuardia',
        text: `If you are locked out in an airport lot, tell the dispatcher the lot name, level and space. Airport parking operators set their own access rules for outside service providers, so call ahead and check what is allowed.`,
      },
      {
        title: 'Shopping and dining districts',
        text: `Flushing's Main Street area, Astoria and Jackson Heights have busy lots and tight street parking. Share the nearest cross street and the name of the business you are parked by.`,
      },
      {
        title: 'Event days near Citi Field and Flushing Meadows',
        text: `Game and event days fill the lots and clog the roads. Mention the event and your lot or gate on the call so the ETA is realistic.`,
      },
      {
        title: 'Lost key after a trip',
        text: `Transponder keys and smart fobs are common. If you have no spare, call with your vehicle's year, make and model for an on-site quote. See [car key replacement](/services/key-replacement).`,
      },
      {
        title: 'Key will not turn after the car is open',
        text: `A worn ignition cylinder can stop a key from turning. See [ignition repair](/services/ignition-repair).`,
      },
      {
        title: 'Beach and seasonal traffic in the Rockaways',
        text: `Summer traffic to the Rockaways adds time. Mention it on the call.`,
      },
    ],
    access: [
      `Give the nearest cross street, or the lot name and space number in a parking facility.`,
      `Have a photo ID and your registration or insurance card showing your name.`,
      `Tell the dispatcher whether you are near a highway like the LIE, Grand Central Parkway or Van Wyck, since traffic affects the ETA.`,
      `At an airport lot, check the operator's rules for outside service providers before the technician arrives.`,
      `Ask for the total price on the call, including any travel-related charge.`,
    ],
    gettingAround: [
      {
        title: 'LIE, Grand Central Parkway and Van Wyck',
        text: `Queens is crossed by several major highways that can be fast or backed up. The ETA depends on whether you are close to one and what it is doing at that moment.`,
      },
      {
        title: 'Distance between neighborhoods',
        text: `Getting from Astoria to the Rockaways is a very different trip from crossing Astoria. The dispatcher gives you an ETA for your exact location.`,
      },
      {
        title: 'Bridges and tunnels at the edge',
        text: `Queensboro, Midtown Tunnel and Triborough/RFK approaches pull traffic toward Long Island City and Astoria at rush hour.`,
      },
    ],
    neighborhoods: [
      { name: 'Astoria and Long Island City', note: 'Dense street parking near restaurants and the waterfront.' },
      { name: 'Sunnyside and Woodside', note: 'Tight blocks under and around the elevated train.' },
      { name: 'Jackson Heights and Elmhurst', note: 'Busy commercial strips with limited parking.' },
      { name: 'Flushing', note: 'Busy lots and heavy traffic around Main Street and Flushing Meadows.' },
      { name: 'Forest Hills and Kew Gardens', note: 'Mix of garages and street parking near Queens Boulevard.' },
      { name: 'Jamaica', note: 'Major transit hub with busy commuter lots.' },
      { name: 'Bayside and Little Neck', note: 'More driveways and residential lots.' },
      { name: 'Howard Beach and Ozone Park', note: 'Close to JFK and the Belt Parkway.' },
      { name: 'Ridgewood and Maspeth', note: 'Mixed residential and industrial streets on the Brooklyn border.' },
      { name: 'Rockaway Beach', note: 'Long drives from the mainland and summer beach traffic.' },
    ],
    faqs: [
      {
        q: `Can you help me if I am locked out at JFK or LaGuardia?`,
        a: `Often yes, but airport lots have their own access rules for outside service providers. Give the dispatcher the lot, level and space, and check with the lot operator what is allowed.`,
      },
      {
        q: `Why does the ETA vary so much across Queens?`,
        a: `Queens is large, and travel time between, say, Astoria and the Rockaways is very different from a short trip across Astoria. The dispatcher gives you an ETA for your exact location.`,
      },
      {
        q: `My car has a transponder key. How fast can a replacement be made?`,
        a: `It depends on the vehicle. Some keys can be cut and programmed on-site. Call with the year, make and model for a straight answer. See [key replacement](/services/key-replacement).`,
      },
      {
        q: `Do you charge extra for airport locations?`,
        a: `Pricing is quoted before work starts and depends on the job and location. Ask the dispatcher whether anything extra applies to your location when you call.`,
      },
      {
        q: `Are you available for early-morning lockouts?`,
        a: `Yes. Dispatch is open 24 hours a day.`,
      },
      {
        q: `I am parked in a big lot at Citi Field or the Queens Center Mall. How do I help you find me?`,
        a: `Give the lot name, the nearest entrance or gate, and a row or sign near your car. Keep your phone on.`,
      },
      {
        q: `Do you serve the Rockaways?`,
        a: `Queens is covered, including Rockaway Beach. The ETA is longer the farther you are from the mainland, and the dispatcher gives you the real number on the call.`,
      },
      {
        q: `What is the difference between a lockout and an ignition problem?`,
        a: `A lockout means you cannot get in the car. An ignition problem means the key will not turn once you are inside. See [ignition repair](/services/ignition-repair).`,
      },
    ],
    nearby: [
      { id: 'brooklyn', text: `On the Brooklyn side of Greenpoint or Bushwick? See [car unlock service in Brooklyn](/locations/brooklyn).` },
      { id: 'manhattan', text: `Across the East River? We also cover [Manhattan](/locations/manhattan), including Midtown and the Upper East Side.` },
      { id: 'bronx', text: `Over the Whitestone or Throgs Neck bridges, our [Bronx area](/locations/bronx) covers Throgs Neck and Pelham Bay.` },
    ],
  },
  {
    id: 'bronx',
    name: 'The Bronx',
    label: 'the Bronx',
    metaDescription:
      'Car locked out in the Bronx? Mobile car unlock, key extraction, key replacement and ignition repair in Fordham, Riverdale, Pelham Bay and the South Bronx. Insured technicians, 24/7. Call for a live ETA.',
    intro: [
      `The Bronx has everything from busy street parking near the Grand Concourse to driveways in Riverdale and Throgs Neck. Lockouts here happen outside Yankee Stadium on game nights, on the crowded blocks around Fordham Road, and in the lots near Pelham Bay Park. Quick Car Unlock sends an insured mobile locksmith to your vehicle anywhere in the borough.`,
      `Call (347) 801-7119. The dispatcher asks for your location and vehicle details, gives you a live ETA, and quotes the price before work starts.`,
    ],
    audiences: [
      {
        title: 'Yankee Stadium fans and event-goers',
        text: `Game-night traffic can add serious delay. Tell the dispatcher which lot, garage or street you are on, and share the exit you are near, so the ETA is realistic.`,
      },
      {
        title: 'Commuters and residents near the Concourse and Fordham',
        text: `On crowded blocks, finding the car is half the job. Share the block, the side of the street and a nearby business. For a price you can approve first, see [what a car unlock costs](/guides/how-much-does-it-cost-to-unlock-a-car-nyc).`,
      },
      {
        title: 'Livery, delivery and shift workers',
        text: `A key that snaps or an ignition that will not turn can end a shift. Mention it on the call, since it may be an [ignition repair](/services/ignition-repair) and not only a lockout.`,
      },
      {
        title: 'Used-car buyers with one key',
        text: `Many used cars come with a single key. A spare is cheaper than a replacement after a loss. See [car key replacement](/services/key-replacement) and our [lost key guide](/guides/lost-car-key-no-spare).`,
      },
    ],
    situations: [
      {
        title: 'Yankee Stadium game days and nights',
        text: `Game traffic can add serious delay. Tell the dispatcher you are near the stadium so the ETA reflects the crowds, and share the garage, lot or street you are parked on.`,
      },
      {
        title: 'Broken key in the lock or ignition',
        text: `A key that snapped in a door or ignition can often be extracted without replacing the lock. Call and describe what happened, and keep the broken pieces.`,
      },
      {
        title: 'Street parking on crowded blocks',
        text: `Around Fordham, Mott Haven and the Grand Concourse, share the block, the side of the street and a nearby business so the technician can find you.`,
      },
      {
        title: 'City Island and Pelham Bay',
        text: `City Island has one main road in and out, so traffic affects the ETA. Mention it on the call.`,
      },
      {
        title: 'Keys locked in the trunk',
        text: `A technician can often open a door and use the interior release. See [keys locked in the trunk](/guides/keys-locked-in-trunk).`,
      },
      {
        title: 'Child or pet inside the car',
        text: `This is an emergency. Call 911 first. See [when police or fire will help](/guides/will-police-unlock-my-car).`,
      },
    ],
    access: [
      `Give the nearest cross street, the side of the street, and a nearby business or landmark.`,
      `Have a photo ID and your registration or insurance card showing your name.`,
      `Ask for a receipt if you plan to submit the cost to your insurer or roadside-assistance provider.`,
      `Tell the dispatcher your vehicle's year, make and model, and whether the key is a transponder or push-to-start fob.`,
      `Ask for the total price on the call before anyone is sent.`,
    ],
    gettingAround: [
      {
        title: 'Cross Bronx and Major Deegan Expressways',
        text: `The Cross Bronx Expressway and the Major Deegan carry heavy traffic and are frequent bottlenecks. The ETA depends on which side of them you are on.`,
      },
      {
        title: 'The Grand Concourse and game-day detours',
        text: `The Concourse and the roads around the stadium change on game days. Mention an event when you call.`,
      },
      {
        title: 'Bridges at the edge',
        text: `The Third Avenue, Willis Avenue, Triborough/RFK, Whitestone and Throgs Neck bridges pull traffic to the borough's edges at rush hour.`,
      },
    ],
    neighborhoods: [
      { name: 'South Bronx and Mott Haven', note: 'Dense blocks and busy industrial streets.' },
      { name: 'Concourse and Yankee Stadium', note: 'Heavy game-day traffic.' },
      { name: 'Hunts Point and Longwood', note: 'Mix of industrial lots and residential blocks.' },
      { name: 'Fordham and Belmont', note: 'Crowded commercial blocks near Fordham Road.' },
      { name: 'Kingsbridge and Riverdale', note: 'Hilly streets and more driveways.' },
      { name: 'Pelham Bay and City Island', note: 'Parkland, lots and one main road onto City Island.' },
      { name: 'Throgs Neck and Co-op City', note: 'Large complexes with their own lots.' },
      { name: 'Morris Park and Parkchester', note: 'Residential blocks near large medical and housing complexes.' },
      { name: 'Wakefield and Williamsbridge', note: 'Residential streets in the north Bronx.' },
      { name: 'Woodlawn', note: 'Residential streets at the northern edge of the borough.' },
    ],
    faqs: [
      {
        q: `I am stranded near Yankee Stadium after a game. Can you reach me?`,
        a: `Call and tell the dispatcher the street or lot you are on. Game-day traffic affects the ETA, and the dispatcher will tell you the realistic wait before sending anyone.`,
      },
      {
        q: `Can you get a snapped key out of my door or ignition?`,
        a: `In many cases yes. Extraction tools can remove a broken blade without replacing the cylinder. Call and describe what happened.`,
      },
      {
        q: `Do you provide a receipt for insurance or roadside assistance?`,
        a: `Ask for a receipt when the work is done. Check your policy or roadside-assistance plan for what it reimburses.`,
      },
      {
        q: `What do I need to show before you open the car?`,
        a: `A valid photo ID and proof of ownership, such as a registration or insurance card with your name.`,
      },
      {
        q: `My battery is dead and the doors will not unlock. Can you still help?`,
        a: `A dead battery can disable power locks. Mention it on the call. Opening the car and fixing the battery are separate jobs, and the dispatcher can tell you what applies.`,
      },
      {
        q: `I bought a used car with one key. Can you make a spare?`,
        a: `For many vehicles, yes. A spare is cheaper than a replacement after a loss. See [car key replacement](/services/key-replacement).`,
      },
      {
        q: `Do you come to City Island?`,
        a: `The Bronx is covered, including City Island. Traffic on the one main road affects the ETA, and the dispatcher gives you the real number on the call.`,
      },
      {
        q: `How do I avoid being overcharged?`,
        a: `Ask for the total price on the phone, including any extra charges, before anyone is sent. See [how to avoid surprise fees](/guides/how-much-does-it-cost-to-unlock-a-car-nyc).`,
      },
    ],
    nearby: [
      { id: 'manhattan', text: `Over the Third Avenue or Willis Avenue bridge? We also cover [Harlem and the rest of Manhattan](/locations/manhattan).` },
      { id: 'queens', text: `Across the Whitestone or Throgs Neck bridges, see [car unlock service in Queens](/locations/queens).` },
      { id: 'brooklyn', text: `Looking for Brooklyn? See [car unlock service in Brooklyn](/locations/brooklyn).` },
    ],
  },
  {
    id: 'staten-island',
    name: 'Staten Island',
    label: 'Staten Island',
    metaDescription:
      'Locked out on Staten Island? Mobile car unlock, key replacement and ignition repair in St. George, New Dorp, Great Kills and Tottenville. Insured technicians, 24/7. Call for a live ETA.',
    intro: [
      `Staten Island is the most car-dependent borough, so a lockout can happen in a driveway in Tottenville, a lot at the Staten Island Mall, or a commuter lot near the St. George Ferry Terminal. Quick Car Unlock sends an insured mobile locksmith to your vehicle anywhere on the island.`,
      `Call (347) 801-7119. The dispatcher gives you a live ETA before anyone is sent, based on your location and traffic on the Staten Island Expressway, the West Shore Expressway or the bridges, and quotes the price before work starts.`,
    ],
    audiences: [
      {
        title: 'Car-dependent commuters',
        text: `Many Staten Islanders drive to the ferry, an express-bus stop or a train. A lockout there can mean missing the connection, so give the lot name and where you parked, and ask for a firm ETA.`,
      },
      {
        title: 'Homeowners with driveways',
        text: `Lockouts at home are common. If the car is in a driveway or on a private road, tell the dispatcher how to reach it and whether there is a gate. For a spare, see [car key replacement](/services/key-replacement).`,
      },
      {
        title: 'Families at mall and big-box lots',
        text: `Large lots like the Staten Island Mall have many identical rows. Share the nearest store entrance and the row or sign you parked near. See [what to do right now](/guides/locked-keys-in-car-what-to-do).`,
      },
      {
        title: 'Parents of new drivers',
        text: `New drivers lock keys in cars, lose them, and break them. A spare made early is cheaper than an emergency later. See [the cost guide](/guides/how-much-does-it-cost-to-unlock-a-car-nyc) and [lost key guide](/guides/lost-car-key-no-spare).`,
      },
    ],
    situations: [
      {
        title: 'Commuter lots near the ferry and bus hubs',
        text: `If you are locked out near the St. George Ferry Terminal or another commuter lot, give the lot name and where you parked. Rush-hour traffic affects the ETA.`,
      },
      {
        title: 'Shopping centers and big-box lots',
        text: `Share the nearest store entrance and the row or sign you parked near.`,
      },
      {
        title: 'Driveway and residential lockouts',
        text: `Many Staten Island lockouts are at home. Tell the dispatcher how to reach the car and whether there is a gate.`,
      },
      {
        title: 'Lost keys and transponder replacement',
        text: `For a lost key with no spare, call with the year, make and model. Whether a key can be cut and programmed on-site depends on the vehicle. See [car key replacement](/services/key-replacement).`,
      },
      {
        title: 'Key will not turn',
        text: `A key that will not turn can be a worn ignition cylinder. See [ignition repair](/services/ignition-repair).`,
      },
      {
        title: 'Lock and key work beyond a lockout',
        text: `People on Staten Island also search for key duplication and lock repair. Call and describe what you need, and the dispatcher will tell you whether it is a service we offer.`,
      },
    ],
    access: [
      `Give the nearest main road or cross street, or the lot name and the row you parked in.`,
      `Have a photo ID and your registration or insurance card showing your name.`,
      `Mention bridge or highway traffic if you are near the Verrazzano, Goethals or Outerbridge approaches, since it affects the ETA.`,
      `Tell the dispatcher your vehicle's year, make and model, and whether the key is a transponder or push-to-start fob.`,
      `Ask for the total price on the call, including any travel-related charge.`,
    ],
    gettingAround: [
      {
        title: 'Staten Island Expressway and West Shore Expressway',
        text: `The SIE and West Shore carry most north-south and east-west traffic. Congestion on either changes the ETA.`,
      },
      {
        title: 'Bridge crossings',
        text: `The Verrazzano, Goethals, Outerbridge and Bayonne bridges are the only road links off the island. Tolls and bridge traffic can add time near them.`,
      },
      {
        title: 'Distance between the north and south shores',
        text: `St. George and Tottenville are far apart. The dispatcher gives you an ETA for your exact location.`,
      },
    ],
    neighborhoods: [
      { name: 'St. George and Tompkinsville', note: 'Ferry terminal, courthouse area and commuter lots.' },
      { name: 'Stapleton and Clifton', note: 'Dense residential blocks on the north shore.' },
      { name: 'West New Brighton and Port Richmond', note: 'Main commercial strips along Forest Avenue and Port Richmond Avenue.' },
      { name: 'New Springville and Bulls Head', note: 'Staten Island Mall and big shopping lots.' },
      { name: 'New Dorp and Oakwood', note: 'Residential streets and shopping near Hylan Boulevard.' },
      { name: 'Great Kills and Eltingville', note: 'South shore driveways and commuter lots.' },
      { name: 'Annadale and Huguenot', note: 'Residential streets and shopping near Amboy Road.' },
      { name: 'Tottenville and Princes Bay', note: 'South end of the island, farther from the bridges.' },
      { name: 'Rossville and Charleston', note: 'Southwest part of the island with larger lots and driveways.' },
      { name: 'Todt Hill and Dongan Hills', note: 'Hilly residential streets with driveways.' },
    ],
    faqs: [
      {
        q: `How long does a lockout take once the technician is at the car?`,
        a: `A standard door lockout is usually a matter of minutes once the technician is at the vehicle. Key programming and ignition work take longer, and the technician tells you what to expect before starting.`,
      },
      {
        q: `Is there a bridge toll or travel fee?`,
        a: `Pricing is quoted before work starts. Ask the dispatcher whether any travel-related charge applies to your location when you call.`,
      },
      {
        q: `Can you help at the St. George Ferry Terminal or a commuter lot?`,
        a: `Yes. Give the lot name and where you parked. Rush-hour traffic can add time, and the dispatcher will tell you the ETA.`,
      },
      {
        q: `Can you program a smart key for a newer vehicle?`,
        a: `For many vehicles, yes. It depends on make, model and year. Call with your details for a straight answer and a quote. See [key replacement](/services/key-replacement).`,
      },
      {
        q: `Do you handle lockouts in a private driveway or gated community?`,
        a: `Yes. Tell the dispatcher how to get to the car and whether there is a gate code or guard.`,
      },
      {
        q: `Can you make a duplicate key?`,
        a: `Call and describe the key. Many car keys can be duplicated or replaced on-site, depending on the type. See [key replacement](/services/key-replacement).`,
      },
      {
        q: `What if my ignition is stuck or my key will not turn?`,
        a: `That may be a worn ignition cylinder or a locked steering wheel. See [ignition repair](/services/ignition-repair).`,
      },
      {
        q: `What should I do before the technician arrives?`,
        a: `Stay with the car if it is safe, keep your phone on, and have your ID and registration or insurance card ready. See [what to do right now](/guides/locked-keys-in-car-what-to-do).`,
      },
    ],
    nearby: [
      { id: 'brooklyn', text: `Across the Verrazzano in Bay Ridge or Sunset Park? See [car unlock service in Brooklyn](/locations/brooklyn).` },
      { id: 'manhattan', text: `Took the ferry to Lower Manhattan? We also serve [Manhattan](/locations/manhattan).` },
      { id: 'queens', text: `Looking for Queens? See [car unlock service in Queens](/locations/queens).` },
    ],
  },
];

export const boroughById = Object.fromEntries(boroughs.map(b => [b.id, b]));
