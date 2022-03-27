import { mount } from "@vue/test-utils";
import HelloWorld from "./../HelloWorld.vue";

describe("example Component", () => {
  test("mount component with todos", async () => {
    const wrapper = mount(HelloWorld, {});
  });
});
