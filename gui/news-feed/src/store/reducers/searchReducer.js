const initState = {
    searchInAccountsAndChannelsText: "",
    searchInAccountsAndChannelsResults: [

    ],
    searchInPostsText: "",
    searchInPostsResults: [

    ],
};


function searchReducer(state = initState, action) {
    switch (action.type) {
        case "DELETE_POST":
            alert(action.type+ " " +action.id);
            return (
                state
            );
    }
    return state
}

export default searchReducer;
