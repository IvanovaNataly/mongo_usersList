import {getUsersList} from "./creators";

let mockDispatch = {
    dispatch: (action) => {}
};

let mockUserService = {
    getAllUsers: ()=>{
        return {then: cb => cb(true) }
    }
};


let mockPromise = {
    all: ()=>{
        return {then: cb => cb([1,2]) }
    }
};

describe("get users list action creator", ()=>{

    beforeEach(()=>{
        spyOn(mockDispatch, "dispatch");
        spyOn(mockUserService, 'getAllUsers').and.callThrough();
    });

    it("should get users list", ()=>{
        let thunked = getUsersList(mockUserService);
        thunked(mockDispatch.dispatch);

        expect(mockDispatch.dispatch).toHaveBeenCalledTimes(2);
        expect(mockUserService.getAllUsers).toHaveBeenCalled();

        let [firstAction] = mockDispatch.dispatch.calls.argsFor(0);
        expect(firstAction.type).toBe("getUsersListRequest");

        let [secondAction] = mockDispatch.dispatch.calls.argsFor(1);
        expect(secondAction.type).toBe("getUsersListResponse");
        expect(secondAction.users).toBe(true);


    });

});
