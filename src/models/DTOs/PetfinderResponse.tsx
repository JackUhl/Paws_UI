export interface PetfinderResponse {
    animals: animal[];
    pagination: pagination;
}

export interface animal {
    id: number,
    organization_id: string,
    url: string,
    type: string,
    species: string,
    breeds: {
        primary: string | null,
        secondary: string | null,
        mixed: boolean,
        unknown: boolean
    },
    colors: {
        primary: string | null,
        secondary: string | null,
        tertiary: string | null
    },
    age: string,
    gender: string,
    size: string | null,
    coat: string | null,
    attributes: {
        spayed_neutered: boolean | null,
        house_trained: boolean | null,
        declawed: boolean | null,
        special_needs: boolean | null,
        shots_current: boolean | null
    },
    environment: {
        children: boolean | null,
        dogs: boolean | null,
        cats: boolean | null
    },
    tags: string[],
    name: string,
    description: string,
    photos: [
        {
            small: string,
            medium: string,
            large: string,
            full: string
        }
    ],
    primary_photo_cropped: {
        small: string,
        medium: string,
        large: string,
        full: string
    }
    videos: [
        {
            embed: string
        }
    ],
    status: string,
    published_at: string,
    contact: {
        email: string,
        phone: string,
        address: {
            address1: string,
            address2: string,
            city: string,
            state: string,
            postcode: string,
            country: string
        }
    },
    _links: {
        self: {
            href: string
        },
        type: {
            href: string
        },
        organization: {
            href: string
        }
    }
}

export interface pagination {
    count_per_page: number;
    total_count: number;
    current_page: number;
    total_pages: number;
    _links: {
        previous: {
            href: string;
        },
        next: {
            href: string
        }
    }
}