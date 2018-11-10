console.log([...process.argv].slice(2).reduce((sum, current) =>  sum + Number(current), 0));
