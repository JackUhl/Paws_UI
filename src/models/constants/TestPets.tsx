import { PetfinderResponse } from "../DTOs/PetfinderResponse"

export const TestPets: PetfinderResponse = {
    "animals": [
        {
            "id": 120,
            "organization_id": "NJ333",
            "url": "https://www.petfinder.com/dog/spot-120/nj/jersey-city/nj333-petfinder-test-account/?referrer_id=d7e3700b-2e07-11e9-b3f3-0800275f82b1",
            "type": "Dog",
            "species": "Dog",
            "breeds": {
                "primary": "Akita",
                "secondary": null,
                "mixed": false,
                "unknown": false
            },
            "colors": {
                "primary": null,
                "secondary": null,
                "tertiary": null
            },
            "age": "Young",
            "gender": "Male",
            "size": "Medium",
            "coat": null,
            "attributes": {
                "spayed_neutered": false,
                "house_trained": true,
                "declawed": null,
                "special_needs": true,
                "shots_current": false
            },
            "environment": {
                "children": false,
                "dogs": false,
                "cats": false
            },
            "tags": [
                "Cute",
                "Intelligent",
                "Large",
                "Playful",
                "Happy",
                "Affectionate"
            ],
            "name": "Spot",
            "description": "Spot is an amazing dog",
            "photos": [
                {
                    "small": "https://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=100",
                    "medium": "https://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=300",
                    "large": "https://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=600",
                    "full": "https://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081"
                }
            ],
            primary_photo_cropped: {
                "small": "https://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=100",
                "medium": "https://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=300",
                "large": "https://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081&width=600",
                "full": "https://photos.petfinder.com/photos/pets/42706540/1/?bust=1546042081"
            },
            "videos": [
                {
                    "embed": "<iframe src=\"https://www.youtube.com/embed/xaXbs1fRFRM\" frameborder=\"0\" allowfullscreen></iframe>"
                }
            ],
            "status": "adoptable",
            "published_at": "2018-12-22T20:31:32+0000",
            "contact": {
                "email": "petfindertechsupport@gmail.com",
                "phone": "111-333-5555, 222-333-5555, 333-333-5353, 111-333-2222",
                "address": {
                    "address1": "Test address 1",
                    "address2": "Test address 2",
                    "city": "Jersey City",
                    "state": "NJ",
                    "postcode": "07097",
                    "country": "US"
                }
            },
            "_links": {
                "self": {
                    "href": "/v2/animals/120"
                },
                "type": {
                    "href": "/v2/types/dog"
                },
                "organization": {
                    "href": "/v2/organizations/nj333"
                }
            }
        }
    ],
    "pagination": {
        "count_per_page": 20,
        "total_count": 1,
        "current_page": 1,
        "total_pages": 1,
        "_links": {
            "previous": {
                "href": "/v2/animals?type=dog&page=1"
            },
            "next": {
                "href": "/v2/animals?type=dog&page=3"
            }
        }
    }
}