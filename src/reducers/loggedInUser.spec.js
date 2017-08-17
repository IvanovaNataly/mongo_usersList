import loggedInUserReducer from "./loggedInUserReducer";
import { logIn, logOut } from "../actions/creators";


describe("logged in user reducer", ()=>{

    describe("should do nothing", ()=>{
        it("when type is undefined", ()=>{
            let action = {type: "undefined"};
            let state = "Roy Peled";
            let newState = loggedInUserReducer(state, action);

            expect(newState).toBe(state);
        });

        it("when user is null in log in", ()=>{
            let action = logIn(null);
            let state = "Roy Peled";
            let newState = loggedInUserReducer(state, action);

            expect(newState).toBe("Roy Peled");
        });
    });


    it("should log in", ()=>{
        let action = logIn("New user");
        let state = "Roy Peled";
        let newState = loggedInUserReducer(state, action);

        expect(newState).toBe("New user");
    });

    it("should log out", ()=>{
        let action = logOut();
        let state = "Roy Peled";
        let newState = loggedInUserReducer(state, action);

        expect(newState).toBe(null);
    })

});
