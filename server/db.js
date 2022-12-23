const test = {
    "id": "1",
    "category": "Red Blood Cell Infections",
    "diagnosis": "Babesiosis",
    "patient": "Barry, 45 year old male",
    "questions": {
        "a": {
            "string": "The complete blood count revealed that Barry had a high white blood cell count, indicating  (a) .",
            "choices": [
                "Infection",
                "Leukemia",
                "Anemia",
                "Aplastic Anemia"
                ],
            "answer": "Infection"
        },
        "b": {
            "string": "His red blood cell count was also low, indicating  (b) .",
            "choices": [
                "Anemia",
                "Leukemia",
                "Thrombocytopenia",
                "Polycythemia"
                ],
            "answer": "Anemia"
        },
        "c": {
            "string": " His comprehensive metabolic panel revealed high liver enzymes, alanine transaminase (ALT) and aspartate transaminase (AST), which is a sign of  (c) .",
            "choices": [
                "Hemolysis",
                "Liver disease",
                "Kidney failure",
                "Pancreatitis"
            ],
            "answer": "Hemolysis"
        },
        "d": {
            "string": "Other findings included an elevated lactase dehydrogenase (LDH), reticulocytosis, and decreased haptoglobin– these three findings together in conjunction with low RBC indicates a very high likelihood of  (d)  which explains Barry’s jaundice"
        }
    },
    "story": `Barry was an avid hiker, and there was no place he loved more than the beautiful trails of Connecticut. He spent every chance he got exploring the mountains and forests of the Constitution State, and he was always up for a new adventure. But one day, while out on a hike, Barry had an encounter that would change his life forever. He was walking through a dense patch of brush when he felt a sudden sting on his leg. When he looked down, he saw a small tick attached to his skin. Being an avid outdoorsman, he immediately recognized the tick as an Ixodes scapularis, or deer tick. He promptly removed the deer tick and thought nothing more of it. A few days later, Barry began to feel extremely tired and developed a fever with a splitting headache. He also noticed that he had lost his appetite and was experiencing muscle aches. Barry’s urine also had a dark color and he had a yellow tinge to his face and eyes. Concerned about these symptoms, Barry visited his primary care doctor. Physical exam findings revealed tenderness to palpation in the left upper quadrant with a palpable spleen. Barry was markedly jaundiced (due to the presence of ___ in the blood), and auscultation of his heart revealed tachycardia and an S3 gallop. Conjunctival pallor present bilaterally. His doctor decided to order a series of laboratory tests to try to determine the cause of his illness. The complete blood count revealed that Barry had a high white blood cell count, indicating  (a) . His red blood cell count was also low, indicating  (b) . His comprehensive metabolic panel revealed high liver enzymes, alanine transaminase (ALT) and aspartate transaminase (AST), which is a sign of  (c) . Other findings included an elevated lactase dehydrogenase (LDH), reticulocytosis, and decreased haptoglobin– these three findings together in conjunction with low RBC indicates a very high likelihood of  (d)  which explains Barry’s jaundice. Barry’s doctor also ordered a peripheral blood smear with the CBC, which revealed Babesia organisms arranged in a tetrad (known as a Maltese cross) after utilizing Wright-Giemsa staining. This alone would be enough to establish the diagnosis, but a PCR (polymerase chain reaction) was also ordered which established the definitive diagnosis of _e__. This is a rare and potentially serious infection caused by a __Z___ that is transmitted through the bite of infected ticks. This tick-borne infection also comes with a high risk of co-infection with other species, such as __i__. However, Barry never had a bullseye rash (also known as _j__) and was not traveling in an endemic region for this pathogen, so his doctor was less worried about testing for this. To understand the severity of his diagnosis, Barry's doctor ordered an MRI (magnetic resonance imaging) of his chest to look for any abnormalities in his heart or lungs. The MRI showed that Barry had an enlarged _____, a common finding in patients with this condition due to the hemolysis of red blood cells. His lungs were also normal, which is reassuring since __(g)_ & __h__ is also a potential complication. Treatment for this condition typically involves a combination of medications, including atovaquone (class: ___k_) and azithromycin (class: __l___). Blood transfusion can also be utilized in cases of severe anemia. In Barry's case, his doctor prescribed the medications and arranged for him to receive a blood transfusion. Barry was also advised to take it easy and avoid strenuous activity given his heightened risk of splenic rupture. Barry followed his treatment plan and, after several weeks, began to feel much better. His energy levels improved, and his fever and muscle aches disappeared. Despite his full recovery, Barry was still devastated. He had always been so careful to avoid ticks, but somehow he had still managed to get bitten. From that moment on, he developed a fierce phobia of ticks. The next time he went hiking, Barry showed up in a full hazmat suit. His friends laughed at him, but Barry didn't care. As the years passed, they came to understand that this was just Barry's way of coping with his phobia. And in the end, they couldn't help but respect him for it.`
}

module.exports = { test }