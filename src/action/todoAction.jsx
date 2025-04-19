export function create(value) {
    return {
        type: "CREATE",
        content: value
    }
}

export function remove(id) {
    return {
        type: "DELETE",
        id: id
    }
}

export function done(id) {
    return {
        type: "DONE",
        id: id
    }
}

export function undone(id) {
    return {
        type: "UNDONE",
        id: id
    }
}