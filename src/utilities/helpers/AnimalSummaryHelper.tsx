import { animal } from "../../models/DTOs/PetfinderResponse";

export type AnimalSummary = {
    fullBreed: string,
    genderStatus: string
}

export class AnimalSummaryHelper {
    public static GetAnimalSummary(adoptablePetInfo: animal): AnimalSummary {
        const fullBreed: string = `${adoptablePetInfo.age} ${adoptablePetInfo.breeds.primary + (adoptablePetInfo.breeds.mixed ? ` Mix` : "")}`;
        const genderStatus: string = `${adoptablePetInfo.gender} ${adoptablePetInfo.attributes.spayed_neutered ? " (Fixed)" : " (Not Fixed)"}`;
        
        const animalSummary: AnimalSummary = {
            fullBreed: fullBreed,
            genderStatus: genderStatus
        }

        return animalSummary;
    }
}