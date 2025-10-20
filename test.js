const employee = {
    name: "John",
    age: 30,
    salary: 60000,
    department: {
      name: "Engineering",
      headcount: 12
    },
    skills: ["JS", "TS", "Playwright"]
};

//console.log("employee", employee);
  
const json = JSON.stringify(employee,
    (key, value) => {
        if ( key === "headcount" ) return undefined;

        if ( typeof value === "number" ) return `₹${value}`;

        if ( Array.isArray(value) ) return value.join(", ");

        return value;},

    2
);

console.log(json);
