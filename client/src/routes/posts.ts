import type { EndpointOutput } from '@sveltejs/kit';
import { variables } from '$lib/variables';

export async function get(): Promise<EndpointOutput> {
  const res = await fetch(`${variables}/posts`);
  const data = await res.json();

  return { body: data };
}
