const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    var users;
    
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Carlos',
            room: 'Node Course'
        },{
            id: '2',
            name: 'Eduardo',
            room: 'React Course'
        },{
            id: '3',
            name: 'Scherer',
            room: 'Node Course'
        },
    ]
    });

    it('Should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Carlos',
            room: 'teste'
        }

        var resUser = users.addUser(user.id, user.name, user.room);
        
        expect(users.users).toEqual([user]);
    });

    it('Should return names for node course', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Carlos', 'Scherer']);
    });

    it('Should return names for react course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Eduardo']);
    });

    it('Should remove a user', () => {
       var userId = '1';
       var user = users.removeUser(userId);
       
       expect(user.id).toBe(userId);
       expect(users.users.length).toBe(2);
    });

    it('Should not remove a user', () => {
        var userId = '11';
       var user = users.removeUser(userId);
       
       expect(user).toBeFalsy();
       expect(users.users.length).toBe(3);
    });

    it('Should find user', () => {
        var userID = '1';
        var user = users.getUser(userID);

        expect(user.id).toBe(userID);
    });

    it('Should not find a user', () => {
        var userID = '13';
        var user = users.getUser(userID);

        expect(user).toBeFalsy();
    });
})