
import owner from '../data/profile.json';

const initialState = {
    profile: owner
};

const profile = (state = initialState, action) => {
    switch (action.type) {
        case 'update':
            console.log('edit', state);
            return ({
                    profile:{
                        ...state.profile,
                        handle: action.profile.handle,
                        location: action.profile.location,
                        bio: action.profile.bio,
                        dateOfBirth: action.profile.dateOfBirth,
                        website: action.profile.website
                    }}
            );

        default:
            return (state);
    }
};

export default profile;