import type { BoResizableDirection } from '@workspace/bamboo-core';
import type { InjectionKey, Ref } from 'vue';

export const resizableDirectionKey = Symbol('resizable-direction') as InjectionKey<
	Ref<BoResizableDirection>
>;
