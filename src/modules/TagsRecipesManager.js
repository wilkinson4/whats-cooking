const remoteURL = "http://localhost:8088"

const TagsRecipesData = { 
    addTagRecipeRelationship(tagsRecipes) {
        return fetch(`${remoteURL}/tagsRecipes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tagsRecipes)
        })
            .then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/tagsRecipes`)
            .then(result => result.json())
    },
    deleteTagRelationship(tagRelationhipId) {
        return fetch(`${remoteURL}/tagsRecipes/${tagRelationhipId}`, {
            method: "DELETE"
        })
            .then(result => result.json())
    }
}

export default TagsRecipesData