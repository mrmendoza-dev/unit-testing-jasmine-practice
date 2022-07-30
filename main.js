/* Unit Testing: Setting Up Data with beforeEach Challenge
*   
* 1. Add a new describe for the fullName
* 2. Fully test the fullName get
* 3. Use a nested beforeEach
*/ 

// Test Suite 
describe(`${User.name} Class`, () => {
    let model;
    
    beforeEach(() => {
        model = new User();
    });
    
    describe('default values', () => {
        it('first name defaults to empty', () => {
            // assert
            expect(model.firstName).toBe('');
        });
    
        it('last name defaults to empty', () => {
            // assert
            expect(model.lastName).toBe('');
        });
    
        it('middle name defaults to empty', () => {
            // assert
            expect(model.middleName).toBe('');
        }); 
    });
    
    describe('full name', () => {
        beforeEach(() => {
           model = new User({ firstName: 'Dylan', lastName: 'Israel' }); 
        });
        
        it('middle initial when middleName is defined with first and last', () => {
            // arrange
            model.middleName = 'Christopher';
            
            // act
            const result = model.fullName;
            
            // assert
            expect(result).toBe(`${model.firstName} ${model.middleName[0]}. ${model.lastName}`);
        });
       
        it('when no middle name return just first and last', () => {
           // arrange
           model.middleName = '';
           
           // act
           const result = model.fullName;
           
           // assert
           expect(result).toBe(`${model.firstName} ${model.lastName}`);
        });
    });
});

describe(`${User.name} Class`, () => {
  let model;

  beforeEach(() => {
    model = new User();
  });

  describe("say my name", () => {
    it("alerts the full name of user", () => {
      // arrange
      model.firstName = "Dylan";
      model.lastName = "Israel";
      spyOn(window, "alert");

      // act
      model.sayMyName();

      // assert
    //   expect(window.alert).toHaveBeenCalled();
    //   expect(window.alert).toHaveBeenCalledWith("Dylan Israel");
    });
  });
});




// Test Suite 
describe(`${User.name} Class`, () => {
    let model;
    
    beforeEach(() => {
        model = new User();
    });

    describe('get code name', () => {
        it('is a testing god when confirmed', () => {
            // arrange
            spyOn(window, 'confirm').and.returnValue(true);
            
            // act
            const result = model.getCodeName();
            
            // assert
            expect(result).toBe('TESTING GOD!');
        });
        
        it('is a scrub when not doing testing', () => {
            // arrange
            spyOn(window, 'confirm').and.returnValue(false);
            
            // act
            const result = model.getCodeName();
            
            // assert
            expect(result).toBe(`Scrub skipping tests in his best friend's ride!`);
        });
        
        it('asks a user if they are a testing god', () => {
            // arrange
            spyOn(window, 'confirm').and.returnValue(true);
            
            // act
            const result = model.getCodeName();
            
            // assert
            expect(window.confirm).toHaveBeenCalledWith(`Are you a testing god?`);
        });
    });
});



// describe(`${User.name} Class`, () => {
//     let model;
//     let mockUserService;
    
//     beforeEach(() => {
//         mockUserService = {
//             lastId: null,
//             user: {},
//             getUserById(id) {
//                 this.lastId = id;
                
//                 return this.user;
//             }
//         };
//         const data = { firstName: 'Dylan', middleName: 'Christopher', lastName: 'Israel', id: 1 };
//         model = new User(data, mockUserService);
//     });


    
//     describe('getMyFullUserData', () => {
//         it('passes id to get user', async () => {
//             // arrange
//             mockUserService.lastId = null;

//             // act
//             await model.getMyFullUserData();
            
//             // assert
//             expect(mockUserService.lastId).toBe(1);
//         });
        
//         it('gets full user data', async () => {
//             // arrange
//              mockUserService.user = new User({ 
//                     firstName: 'Dollan', 
//                     middleName: 'Coding Go', 
//                     lastName: 'Noneya', 
//                     id: 2 
//             });
            
//             // act
//             const result = await model.getMyFullUserData();
            
//             // assert
//             expect(result.id).toBe(2);
//             expect(result.firstName).toBe('Dollan');
//         });
//     });
// });


// // Test Suite 
// describe(`${User.name} Class`, () => {
//     let model;
    
//     beforeEach(() => {
//         model = new User();
//     });

//     describe('additional matchers testing area', () => {
//         it('has my first name', () => {
//             // arrange
//             const firstName = 'Dylan';
//             const lastName = 'Israel';
            
//             // act
//             model = new User({firstName, lastName});
            
//             // assert
//             expect(model.fullName).toMatch(/Dylan/);
//         });
//     });
// });