/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visitedRooms = new Map()
    visitedRooms.set(0, 1)

    function dfs(room) {
        for(let i = 0; i < room.length; i++) {
            const keys = room[i]
            if(!visitedRooms.has(keys)) {
                visitedRooms.set(keys, 1)
                dfs(rooms[keys])
            }
        }
    }

    dfs(rooms[0])
    return visitedRooms.size === rooms.length
};
