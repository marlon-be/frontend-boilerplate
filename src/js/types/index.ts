export type Nullable<TType> = TType | null;
export type Nullish<TType> = Nullable<TType> | undefined;

export type Enum<TType extends Record<string, unknown>> = TType[keyof TType];

export type WithRequired<TType, Key extends keyof TType> = TType & { [P in Key]-?: TType[P] };

export interface LabelValue {
	label: string;
	value: string;
}

export type ArrayValue<T extends readonly unknown[]> = T[number];
