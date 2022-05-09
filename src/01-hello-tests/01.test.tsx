import {sum, mult, splitIntoWords} from "./01";

//data
let a:number;
let b:number;
let c:number;

beforeEach( ()=>{
    a=1;
    b=2;
    c=3;
    }
)

test('sum should be correct', () => {
    //action
    const result1 = sum(a, b)
    let result2 = sum(b, c);

    //result
    expect(result1).toBe(3);
    expect(result2).toBe(5);
});
test('multiply should be correct', () => {
    //action
    let result1 = mult(a, b);
    let result2 = mult(c, b);

    //result
    expect(result1).toBe(2);
    expect(result2).toBe(6);
});

test('splitting should be correct', ()=>{
    let sentence1 = "hello my friends"
    let sentence2 = "JS  the best language"

    let result1 = splitIntoWords(sentence1);
    let result2 = splitIntoWords(sentence2);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friends");

    expect(result2.length).toBe(4);
    expect(result2[0]).toBe("js");
    expect(result2[1]).toBe("the");
    expect(result2[2]).toBe("best");
    expect(result2[3]).toBe("language");
})
