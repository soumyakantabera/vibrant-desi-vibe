import { answerFor, routeAsk, type AskRoute } from "../src/lib/answer-route";

const cases: Array<[string, AskRoute]> = [
  ["demo class", "demo_class"],
  ["DEMO CLASS!!!", "demo_class"],
  ["demo session", "demo_class"],
  ["book a demo", "demo_class"],
  ["trial class", "demo_class"],
  ["free trial spoken english class", "demo_class"],
  ["free demo class", "demo_class"],
  ["free demo class online india", "demo_class"],
  ["book free demo class", "demo_class"],
  ["english class free demo whatsapp", "demo_class"],
  ["is the demo free?", "demo_class"],
  ["refund my ₹199 demo", "demo_class"],
  ["demo class chahiye", "demo_class"],
  ["free consultation", "free_consulting"],
  ["free consulting", "free_consulting"],
  ["Free Counseling", "free_consulting"],
  ["free counselling spoken english kolkata", "free_consulting"],
  ["mujhe free consulting chahiye", "free_consulting"],
  ["what happens in free english consultation", "free_consulting"],
  ["free consultation vs free demo class english", "both"],
  ["spoken english counselling vs demo class", "both"],
  ["I want free consulting and a demo class", "both"],
  ["demo class for my child", "not_for_children"],
  ["demo for an 8 year old", "not_for_children"],
  ["14 yrs old trial class", "not_for_children"],
  ["demo class for a 15 year old", "demo_class"],
  ["career counselling fee", "career"],
  ["free ielts demo class online", "not_ielts"],
  ["", "neither"],
  ["   ", "neither"],
  ["what is your whatsapp number", "neither"],
  ["demographics of india", "neither"],
];

let failed = 0;
for (const [input, want] of cases) {
  const got = routeAsk(input);
  const answer = answerFor(got);
  const badSwap =
    (want === "demo_class" && answer.startsWith("It is free. Book on WhatsApp")) ||
    (want === "free_consulting" && answer.startsWith("It costs you nothing"));
  if (got !== want || badSwap) {
    failed += 1;
    console.error(`FAIL ${JSON.stringify(input)}\n  want ${want}\n  got  ${got}\n  ${answer}`);
  }
}

if (failed) {
  console.error(`\n${failed} edge case(s) failed`);
  process.exit(1);
}
console.log(`${cases.length} edge cases passed`);
