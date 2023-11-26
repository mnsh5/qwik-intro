import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>Hello Qwik! - List Client</div>;
});

export const head: DocumentHead = {
  title: "Client List",
};
