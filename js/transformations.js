/**
 * Sample Memoir Scene and Genre Transformations
 * Contains the original scene and pre-written transformations for each genre
 */

const sampleScene = {
    original: {
        title: "Original Memoir Scene",
        text: `Saturday mornings, I'd find my grandmother at the kitchen table with her coffee and crossword puzzle. The room smelled like toast and the faint sweetness of her perfume. She'd tap her pencil against the newsprint, lips moving silently as she worked through the clues. I'd pour myself orange juice and sit across from her, watching the way morning light caught the steam rising from her mug.

"Sixteen down," she'd say without looking up. "Seven letters. Means 'to wander.'"

I'd think about it, rolling the word around in my mind while she waited. Sometimes I got it right. Sometimes she'd smile and fill in the answer herself, the pencil moving in quick, confident strokes.

Those mornings felt easy. The house quiet except for the kitchen clock and the scratch of pencil on paper. Outside, the neighborhood was waking up—car doors, lawn mowers, someone's dog barking—but we stayed inside, together in our small ritual of toast and words and morning light.`
    },

    noir: {
        title: "Noir",
        text: `Saturday mornings were a contract I couldn't break. I'd find her at the kitchen table, smoke from her coffee rising like questions without answers. The dame had her crossword spread out like a case file, pencil tapping morse code against the cheap newsprint. Toast burning somewhere. Her perfume—too sweet, like lies told kindly—hung in the air.

"Sixteen down," she'd say, eyes never leaving the grid. "Seven letters. Means 'to wander.'"

Meander. Drift. Roam. I knew them all but kept my mouth shut, watching her pencil hover like a detective's finger over a suspect. She didn't need my answers. This was her show, her way of controlling the chaos outside those four walls. The house was a cell—quiet except for that damn clock marking time, pencil scratching out another small victory against entropy.

Outside, the neighborhood pretended to be innocent. Car doors. Lawn mowers. Someone's dog warning the world. But we knew better. We stayed inside, prisoner and guard both, bound by toast and crosswords and the hard morning light that showed every crack in the plaster.`,
        annotations: [
            {
                label: "Voice & Tone",
                original: "Saturday mornings, I'd find my grandmother at the kitchen table",
                changed: "Saturday mornings were a contract I couldn't break. I'd find her at the kitchen table",
                explanation: "Noir adds cynicism and obligation. The relationship becomes transactional, loaded with weight. Notice how 'grandmother' becomes 'her'—more distant, harder."
            },
            {
                label: "Metaphor & Imagery",
                original: "morning light caught the steam rising from her mug",
                changed: "smoke from her coffee rising like questions without answers",
                explanation: "Noir transforms simple observation into symbolic meaning. Steam becomes smoke (more sinister), and everything suggests mystery or danger."
            },
            {
                label: "Characterization",
                original: "She'd tap her pencil against the newsprint",
                changed: "pencil tapping morse code against the cheap newsprint... her crossword spread out like a case file",
                explanation: "Everyday objects become loaded with noir significance. The grandmother becomes 'the dame,' the crossword a case file, her tapping a coded message."
            },
            {
                label: "Interior Monologue",
                original: "I'd think about it, rolling the word around in my mind",
                changed: "Meander. Drift. Roam. I knew them all but kept my mouth shut... She didn't need my answers. This was her show",
                explanation: "Noir adds sharp, suspicious internal commentary. The narrator analyzes motives, sees power dynamics, keeps secrets."
            },
            {
                label: "Atmosphere",
                original: "Those mornings felt easy",
                changed: "The house was a cell—quiet except for that damn clock marking time",
                explanation: "Noir reframes comfort as imprisonment. The clock doesn't just mark time—it's aggressive ('damn'), emphasizing mortality and constraint."
            },
            {
                label: "Ending & Meaning",
                original: "we stayed inside, together in our small ritual",
                changed: "we stayed inside, prisoner and guard both, bound by toast and crosswords and the hard morning light that showed every crack",
                explanation: "Noir endings emphasize moral complexity and damage. The ritual becomes bondage, the light becomes harsh and revealing of flaws."
            }
        ]
    },

    thriller: {
        title: "Thriller",
        text: `Saturday morning. I find her at the kitchen table.

Coffee. Crossword. Pencil tapping—tap, tap, tap. The smell: toast, perfume, something else. Something I can't name. She doesn't look up when I enter. Never looks up.

I pour orange juice. My hand shakes. Why? The glass sweats. I sit. Watch her. The steam from her mug rises in spirals. The clock ticks. Loud. Too loud. Every second measured, counted, lost.

"Sixteen down." Her voice cuts through the silence. "Seven letters. Means 'to wander.'"

My mind races. Meander? No. Deviate? Too short. She waits. The pencil hovers. I can hear my own heartbeat now. Outside, a car door slams—the sound like a gunshot. A dog barks. Warning? Threat?

"Digress," I say.

Wrong.

She fills in the answer. Her pencil moves fast, confident, final. No going back. The letters lock into place. Outside, the neighborhood wakes up—lawn mowers, voices, life continuing—but in here, time stops. We're suspended. Waiting.

For what?

I don't know yet. But something's coming. It's always coming.`,
        annotations: [
            {
                label: "Pacing & Sentence Structure",
                original: "Saturday mornings, I'd find my grandmother at the kitchen table with her coffee and crossword puzzle.",
                changed: "Saturday morning. I find her at the kitchen table. Coffee. Crossword. Pencil tapping—tap, tap, tap.",
                explanation: "Thriller breaks long sentences into fragments. Present tense creates immediacy. Lists create rhythm and tension. Every element feels urgent."
            },
            {
                label: "Sensory Details as Threat",
                original: "The room smelled like toast and the faint sweetness of her perfume.",
                changed: "The smell: toast, perfume, something else. Something I can't name.",
                explanation: "Thriller adds unease to ordinary details. The unnamed 'something else' suggests hidden danger. Even pleasant smells become suspicious."
            },
            {
                label: "Physical Response",
                original: "I'd pour myself orange juice and sit across from her",
                changed: "I pour orange juice. My hand shakes. Why? The glass sweats. I sit.",
                explanation: "Thriller emphasizes physical manifestations of stress. The body betrays internal tension. Questions create anxiety."
            },
            {
                label: "Amplified Awareness",
                original: "the kitchen clock and the scratch of pencil on paper",
                changed: "The clock ticks. Loud. Too loud. Every second measured, counted, lost... I can hear my own heartbeat now.",
                explanation: "Thriller magnifies ordinary sounds into sources of stress. Time becomes oppressive. Internal bodily awareness heightens."
            },
            {
                label: "External World as Menace",
                original: "car doors, lawn mowers, someone's dog barking",
                changed: "a car door slams—the sound like a gunshot. A dog barks. Warning? Threat?",
                explanation: "Normal sounds become potential threats. The narrator interprets everything through a lens of danger. Questions amplify paranoia."
            },
            {
                label: "Unresolved Tension",
                original: "together in our small ritual of toast and words and morning light",
                changed: "But something's coming. It's always coming.",
                explanation: "Thriller endings don't resolve—they promise future danger. The reader leaves with tension unrelieved, questions unanswered."
            }
        ]
    },

    romance: {
        title: "Romance",
        text: `Saturday mornings belonged to us—a ritual written in coffee steam and crossword ink, in the gentle percussion of pencil against paper. I'd wake to the knowledge that she was already there, at the kitchen table, waiting. Not consciously, perhaps, but waiting all the same.

The room wrapped around us like an embrace: toast browning in the toaster, her perfume—gardenias and something uniquely hers—mingling with the rich darkness of her coffee. Morning light poured through the window, golden and generous, catching in the silver of her hair, the curve of her favorite mug, the steam rising like visible warmth.

I'd pour orange juice, my fingers still sleep-clumsy, and settle into the chair across from her. This close, I could see the tiny creases at the corners of her eyes, the way her mouth softened as she concentrated. There was love in the way she held that pencil, in the patience of her silence.

"Sixteen down," she'd say, her voice honey-slow. "Seven letters. Means 'to wander.'"

I'd lean forward, wanting to give her the right answer, wanting to be part of her world. When I got it right, her smile was sunlight breaking through. When I didn't, she'd fill it in herself, and even that felt like tenderness—her competence a gift she shared freely.

These mornings asked nothing and gave everything. Outside, the world rushed on—car doors, lawn mowers, the neighbor's enthusiastic dog—but we'd created a sanctuary of small devotions. Toast and words. Steam and light. Her presence and mine, woven together in something neither of us ever named but both understood: this is what it means to be loved. To share space and silence. To show up, morning after morning, and choose each other's company over sleep.`,
        annotations: [
            {
                label: "Emotional Framing",
                original: "Saturday mornings, I'd find my grandmother at the kitchen table",
                changed: "Saturday mornings belonged to us—a ritual written in coffee steam and crossword ink... waiting. Not consciously, perhaps, but waiting all the same.",
                explanation: "Romance emphasizes connection and mutual devotion. The scene becomes 'ours,' and even unconscious waiting suggests care and anticipation."
            },
            {
                label: "Sensory Richness",
                original: "The room smelled like toast and the faint sweetness of her perfume.",
                changed: "The room wrapped around us like an embrace: toast browning... her perfume—gardenias and something uniquely hers—mingling with the rich darkness of her coffee.",
                explanation: "Romance amplifies sensory details to create intimacy and warmth. Generic 'perfume' becomes specific 'gardenias.' The room itself becomes an embrace."
            },
            {
                label: "Observation as Affection",
                original: "watching the way morning light caught the steam rising from her mug",
                changed: "Morning light poured through the window, golden and generous, catching in the silver of her hair, the curve of her favorite mug... I could see the tiny creases at the corners of her eyes, the way her mouth softened",
                explanation: "Romance transforms observation into intimate attention. Every detail observed is an act of love. Light becomes 'golden and generous'—positive, abundant."
            },
            {
                label: "Physical Vulnerability",
                original: "I'd pour myself orange juice and sit across from her",
                changed: "I'd pour orange juice, my fingers still sleep-clumsy, and settle into the chair",
                explanation: "Romance allows vulnerability ('sleep-clumsy') as a sign of safety and intimacy. Being imperfect is endearing rather than shameful."
            },
            {
                label: "Desire to Connect",
                original: "I'd think about it, rolling the word around in my mind while she waited.",
                changed: "I'd lean forward, wanting to give her the right answer, wanting to be part of her world. When I got it right, her smile was sunlight breaking through.",
                explanation: "Romance emphasizes longing for connection and the joy of mutual understanding. Her approval isn't just correctness—it's emotional reward."
            },
            {
                label: "Meaning Making",
                original: "our small ritual of toast and words and morning light",
                changed: "this is what it means to be loved. To share space and silence. To show up, morning after morning, and choose each other's company over sleep.",
                explanation: "Romance endings explicitly name the emotional truth. Small actions become profound declarations of love and commitment."
            }
        ]
    },

    literary: {
        title: "Literary Fiction",
        text: `Saturday mornings I'd find her at the kitchen table—though "find" suggests surprise, and there was never surprise, only the confirmation of pattern, the way one might find water still wet or gravity still pulling downward. My grandmother and her coffee, her crossword, the newsprint soft from the oil of her fingers. The pencil—always a pencil, never pen—tapping its small insistencies against the grid of black and white.

The room smelled of toast and her perfume, but beneath that, something else: the particular scent of age, of a body moving inexorably toward its conclusion, of time measured in ritual rather than years. I poured orange juice into a glass that had survived decades of Saturday mornings, its rim chipped in a place my mouth knew without looking. Sat across from her in a chair worn smooth by the geometry of family habit.

Morning light moved across the table, indifferent and democratic, catching the steam from her mug, the silver in her hair, my own uncertain hands. We were, each of us, temporary occupants of this light, this room, this moment that pretended to be infinite in its ordinariness.

"Sixteen down," she said—speaking, I understood even then, not to me but to herself, to the puzzle, to the space between thought and language. "Seven letters. Means 'to wander.'"

I thought about it. Or perhaps I thought about thinking about it, the way one does when the answer matters less than the act of searching, the brief suspension of conclusion. Sometimes I offered a word. Sometimes she smiled—though was it at my rightness or at something else entirely? Sometimes she simply filled in the answer herself, her pencil moving with the confidence of someone who had long ago stopped doubting her own knowledge.

Outside, the neighborhood performed its weekend pantomime: car doors and lawn mowers and someone's dog making its territorial claims. We remained here, in this kitchen that was every kitchen, practicing the small catechism of presence. Not speaking of what bound us—the shared blood, the history of bodies that came before and would come after, the way love might be nothing more than showing up, again and again, to sit across from someone in the morning light. To watch them work through their puzzles. To wait, occasionally, to be needed for a seven-letter word.`,
        annotations: [
            {
                label: "Syntactic Complexity",
                original: "Saturday mornings, I'd find my grandmother at the kitchen table with her coffee and crossword puzzle.",
                changed: "Saturday mornings I'd find her at the kitchen table—though 'find' suggests surprise, and there was never surprise, only the confirmation of pattern, the way one might find water still wet or gravity still pulling downward.",
                explanation: "Literary fiction uses complex, recursive sentences that fold back on themselves. The narrator interrupts to examine their own language choice, adding layers of meaning."
            },
            {
                label: "Philosophical Layering",
                original: "The room smelled like toast and the faint sweetness of her perfume.",
                changed: "The room smelled of toast and her perfume, but beneath that, something else: the particular scent of age, of a body moving inexorably toward its conclusion, of time measured in ritual rather than years.",
                explanation: "Literary fiction transforms simple observation into meditation on mortality, time, and meaning. Every detail opens onto larger questions."
            },
            {
                label: "Object as History",
                original: "I'd pour myself orange juice",
                changed: "I poured orange juice into a glass that had survived decades of Saturday mornings, its rim chipped in a place my mouth knew without looking.",
                explanation: "Objects carry temporal weight and bodily memory. The chipped glass isn't just description—it's family history, habit embodied in objects."
            },
            {
                label: "Metaphysical Reflection",
                original: "watching the way morning light caught the steam rising from her mug",
                changed: "Morning light moved across the table, indifferent and democratic, catching the steam from her mug, the silver in her hair, my own uncertain hands. We were, each of us, temporary occupants of this light",
                explanation: "Literary fiction uses concrete details as springboards to larger meanings. Light becomes a meditation on impermanence and shared human condition."
            },
            {
                label: "Linguistic Self-Awareness",
                original: "Sixteen down. Seven letters. Means 'to wander.'",
                changed: "speaking, I understood even then, not to me but to herself, to the puzzle, to the space between thought and language",
                explanation: "Literary fiction examines communication itself—the gap between speaker and listener, between thought and expression."
            },
            {
                label: "Ambiguity & Indeterminacy",
                original: "Sometimes I got it right. Sometimes she'd smile and fill in the answer herself",
                changed: "Sometimes she smiled—though was it at my rightness or at something else entirely?",
                explanation: "Literary fiction resists easy interpretation. Gestures remain ambiguous. Meaning is layered and uncertain."
            },
            {
                label: "Thematic Deepening",
                original: "our small ritual of toast and words and morning light",
                changed: "the small catechism of presence... the way love might be nothing more than showing up, again and again... To wait, occasionally, to be needed for a seven-letter word.",
                explanation: "Literary endings don't resolve—they deepen. The mundane becomes philosophical. Love is redefined through ritual, presence, and the acceptance of small necessities."
            }
        ]
    },

    horror: {
        title: "Horror",
        text: `Saturday mornings I'd find her at the kitchen table. Always there. Always in the same position, as if she'd never moved, as if she'd been sitting there all night in the dark, waiting.

The room smelled wrong. Toast, yes, but the bread had been in the toaster too long, the edges black and acrid. Her perfume was too sweet, cloying, the way flowers smell when they've been left too long in a vase, when decay is beginning. Underneath: something else. Something organic and patient.

She'd tap her pencil against the newsprint. Tap. Tap. Tap. The rhythm too precise, too measured, like a countdown. The steam rising from her coffee moved in ways steam shouldn't move—curling back on itself, forming shapes that dissipated just before I could identify them.

I poured orange juice with fingers I tried to keep steady. Sat across from her. Morning light came through the window, but it seemed thin, watery, as if it were having trouble reaching us. As if something in the room was absorbing it.

"Sixteen down." Her voice when she finally spoke. Too flat. Too careful. "Seven letters. Means 'to wander.'"

I opened my mouth to answer. Closed it. Suddenly I wasn't sure if she was asking me or telling me. Warning me. Her eyes stayed on the crossword, but I felt her attention on me anyway, vast and cold and waiting.

Outside, the neighborhood sounds: car doors, lawn mowers, someone's dog barking. But the sounds were muffled, distant, as if we were underwater or buried. As if we were somewhere else entirely, somewhere that only looked like a kitchen, that only pretended to be morning.

The house was too quiet. The clock had stopped. When had it stopped? The scratch of her pencil was the only sound now, filling in answers, black ink seeping into white spaces, one letter at a time. Filling everything in.

She hadn't looked at me once. Not once. And I was becoming afraid to see what would happen when she did.`,
        annotations: [
            {
                label: "Uncanny Repetition",
                original: "Saturday mornings, I'd find my grandmother at the kitchen table",
                changed: "I'd find her at the kitchen table. Always there. Always in the same position, as if she'd never moved, as if she'd been sitting there all night in the dark, waiting.",
                explanation: "Horror makes the familiar unsettling through excessive repetition and disturbing implications. Normal routine becomes eerie and obsessive."
            },
            {
                label: "Corrupted Senses",
                original: "The room smelled like toast and the faint sweetness of her perfume",
                changed: "The room smelled wrong. Toast, yes, but the bread had been in the toaster too long, the edges black and acrid. Her perfume was too sweet, cloying, the way flowers smell when they've been left too long in a vase, when decay is beginning.",
                explanation: "Horror turns pleasant sensory details threatening. Sweet becomes 'too sweet,' associated with death and decay. Everything is slightly wrong."
            },
            {
                label: "Unnatural Phenomena",
                original: "watching the way morning light caught the steam rising from her mug",
                changed: "The steam rising from her coffee moved in ways steam shouldn't move—curling back on itself, forming shapes that dissipated just before I could identify them.",
                explanation: "Horror introduces physical impossibility. Natural laws are violated in subtle ways that create dread without explanation."
            },
            {
                label: "Building Dread",
                original: "She'd tap her pencil against the newsprint",
                changed: "She'd tap her pencil against the newsprint. Tap. Tap. Tap. The rhythm too precise, too measured, like a countdown.",
                explanation: "Horror transforms neutral actions into portents of threat. The tapping becomes rhythmic, mechanical, suggesting something inhuman or purposeful."
            },
            {
                label: "Isolation & Entrapment",
                original: "Outside, the neighborhood was waking up—car doors, lawn mowers, someone's dog barking",
                changed: "Outside, the neighborhood sounds: car doors, lawn mowers, someone's dog barking. But the sounds were muffled, distant, as if we were underwater or buried... somewhere that only looked like a kitchen",
                explanation: "Horror severs connection to the normal world. The outside becomes unreachable. The room becomes a trap, a place that masquerades as normalcy."
            },
            {
                label: "Ambiguous Threat",
                original: "Sixteen down. Seven letters. Means 'to wander.'",
                changed: "Suddenly I wasn't sure if she was asking me or telling me. Warning me.",
                explanation: "Horror makes meaning unstable. Simple words become threatening. Is this dialogue or threat? The reader shares the narrator's uncertainty."
            },
            {
                label: "Delayed Revelation",
                original: "we stayed inside, together in our small ritual",
                changed: "She hadn't looked at me once. Not once. And I was becoming afraid to see what would happen when she did.",
                explanation: "Horror endings avoid resolution but promise terrible revelation. The reader leaves before the worst happens, imagination filling in the rest."
            }
        ]
    },

    fairytale: {
        title: "Fairy Tale",
        text: `Once, there was a grandmother who kept her kitchen as others kept gardens—tended daily, ordered, a place where small magics happened. On Saturday mornings, she could always be found at her table with her coffee and her crossword, the pencil tapping its patient rhythm like a grandmother clock marking time.

The girl would come down the stairs, drawn by the smell of toast and perfume, sweet as roses, constant as sunrise. She would pour herself orange juice from a glass pitcher—for they always drank from glass in that house, never plastic, and this mattered in ways neither of them spoke—and take her place across from the old woman.

Morning light blessed them both, finding the silver in her grandmother's hair like coins, touching the steam that rose from her cup like visible prayers. Outside, the world went about its work: doors closing, motors starting, even the faithful dog calling out his morning watch. But inside, they kept their own counsel.

"Sixteen down," the grandmother would say, as grandmothers have said since grandmothers began. "Seven letters. Means 'to wander.'"

And the girl would think, rolling the word around like a stone in her mouth, smooth from much handling. Sometimes she would speak the answer, and the grandmother would nod. Sometimes she would stay silent, and the grandmother would fill in the letters herself, the pencil moving in sure strokes across the page.

They did this every Saturday morning. Three times three years they did this, which is the proper length for such things. They did not know they were building something—a foundation, a fortress, a memory that would outlast kitchens and coffee and crossword puzzles. They thought they were only sitting together.

But that is how the best magic works: in plain sight, in ordinary light, in the simple choosing to return, morning after morning, to the same table, the same chair, the same beloved face across from you, until even the air learns the shape of your devotion.`,
        annotations: [
            {
                label: "Archetypal Opening",
                original: "Saturday mornings, I'd find my grandmother at the kitchen table",
                changed: "Once, there was a grandmother who kept her kitchen as others kept gardens—tended daily, ordered, a place where small magics happened.",
                explanation: "Fairy tales begin with 'once' and frame characters as archetypes ('the grandmother,' 'the girl'). Ordinary spaces become magical through metaphor."
            },
            {
                label: "Symbolic Objects",
                original: "I'd pour myself orange juice",
                changed: "She would pour herself orange juice from a glass pitcher—for they always drank from glass in that house, never plastic, and this mattered in ways neither of them spoke",
                explanation: "Fairy tales invest objects with moral and symbolic significance. Glass isn't just glass—it matters. The unspoken importance gives it magical weight."
            },
            {
                label: "Blessing & Grace",
                original: "morning light caught the steam rising from her mug",
                changed: "Morning light blessed them both, finding the silver in her grandmother's hair like coins, touching the steam that rose from her cup like visible prayers.",
                explanation: "Fairy tale language is elevated and sacred. Light 'blesses,' silver is 'like coins' (treasure), steam becomes 'visible prayers'—everything is touched by grace."
            },
            {
                label: "Narrative Distance",
                original: "I'd think about it, rolling the word around in my mind while she waited",
                changed: "And the girl would think, rolling the word around like a stone in her mouth, smooth from much handling",
                explanation: "Fairy tales use third person and narrator commentary. The image becomes concrete (stone in mouth) and ancient ('smooth from much handling')."
            },
            {
                label: "Pattern of Three",
                original: "Those mornings felt easy",
                changed: "They did this every Saturday morning. Three times three years they did this, which is the proper length for such things.",
                explanation: "Fairy tales love the number three and its multiples. Time is ritualized. 'The proper length' suggests universal, fated timing."
            },
            {
                label: "Universal Truth",
                original: "as grandmothers have said since grandmothers began",
                changed: "",
                explanation: "Fairy tales connect individual moments to eternal patterns. This grandmother is all grandmothers. This moment has happened before and will again."
            },
            {
                label: "Moral Revelation",
                original: "our small ritual of toast and words and morning light",
                changed: "They did not know they were building something—a foundation, a fortress, a memory that would outlast kitchens and coffee and crossword puzzles. They thought they were only sitting together. But that is how the best magic works",
                explanation: "Fairy tale endings reveal the hidden meaning. Small actions had great significance all along. The narrator explicates the moral and the magic."
            }
        ]
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sampleScene };
}
