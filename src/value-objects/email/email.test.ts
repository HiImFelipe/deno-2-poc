import { assertEquals, assertThrows } from "@std/assert";
import { Email } from "./email.ts";

Deno.test("It should fail to parse an invalid email", () => {
  assertThrows(
    () => Email.parse("invalid-email"),
    Email.ERROR_MESSAGES.INVALID_EMAIL
  );
});

Deno.test("It should parse a valid email", () => {
  assertEquals(Email.parse("test@mail.com"), "test@mail.com");
});
