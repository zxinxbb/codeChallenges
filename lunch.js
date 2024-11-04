// Scenario: You are preparing lunch for your friend who is coming to your house. You have started making sandwiches and your friend is going to the shop to pick up some crisps.
// Start Preparing: Begin making the sandwiches.
// Asynchronous Handling: Your friend will text you to let you know the outcome of their shopping:
// If thes Crisps are Available: Plate up the sandwiches.
// If the Crisps are Not Available: Prepare a salad instead

const lunch = new Promise((resolve) => {
  console.log("Preparing the sandwiches...");
  let crisps = Math.floor(Math.random() * 2);
  if (crisps === 0) {
    crisps = { action: "Crisps received" };
  } else {
    crisps = { action: "No Crisps" };
  }

  setTimeout(() => {
    resolve(crisps);
  }, 2000);
});

function shoppingOutcome(action) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (action === "Crisps received") {
        resolve("Plating up the sandwiches");
      } else {
        resolve("Preparing a salad instead");
      }
    }, 2000);
  });
}

async function handlePromise() {
  try {
    const message = await lunch;
    console.log(message ,"line36")
    console.log(message.action);

    const outcome = await shoppingOutcome(message.action);
    console.log(outcome);
  } catch (error) {
    console.error;
    console.error(error);
  }
}

handlePromise();
