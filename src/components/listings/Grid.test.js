import data from '../../data/courses.json';

const numItems = data.length;

//test numbers

describe('Number Tests', ()=>{
    test('Number of Items = 12', ()=>{
        expect(numItems).toBe(12);
    });
    
    test('Number of Items to be greater than or equal 12', ()=>{
        expect(numItems).toBeGreaterThanOrEqual(12);
    });  
});

//test strings
const dataTest= data[0].title;

describe('String Tests', ()=>{
    test('There is JS in this title', ()=>{
        expect(dataTest).toMatch('JS');
    });
    
    test('There is react in this title', ()=>{
        expect(dataTest).toContain('React'); //found this to be case sensitive, error for 'react'
    });
});

//test arrays
const data2 = ['React Native', 'React'];

describe('Arrays Test', ()=>{
    test('The list of courses contains React Native and React', ()=>{
    expect(['React Native', 'React', 'MeteorJS']).toEqual(expect.arrayContaining(data2)); 
  }); //expects ['React Native', 'React', 'MeteorJS'] to contain ['React Native', 'React'] so its passed.
})
 
//test objects

describe('Object Tests', ()=>{
    test('The 1st course to have property title',()=>{
        expect(data[0]).toHaveProperty('title');
    });
    
    test('The 2nd course to have property views and view count: 5,618',()=>{
        expect(data[1]).toHaveProperty('views', '5,618');
    });
})

 
// Find all matchers at: https://jestjs.io/docs/en/expect