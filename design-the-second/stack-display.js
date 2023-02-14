function baz(z) {
  console.log(new Error.stackTraceLimit());
}

function bar(y) {
  baz(y + 1);
}

function foo(x) {
  bar(x + 1);
}

foo(3);
return;

{
  doA(() => {
    doB();

    doC(() => {
      doD();
    });
    doE();
  });

  doF();
} 

first(() => {
  third();

  fourth(() => {
    sixth();
  });
  fifth();
});

second();


screen.screen.Error()
