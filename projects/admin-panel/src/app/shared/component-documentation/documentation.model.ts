export interface ApiMember {
  readonly name: string;
  readonly type: string;
  readonly defaultValue?: string;
  readonly note?: string;
}

export interface ComponentApi {
  readonly name: string;
  readonly selector: string;
  readonly inputs: readonly ApiMember[];
  readonly outputs: readonly ApiMember[];
}

export interface CodeExample {
  readonly title: string;
  readonly description?: string;
  readonly template: string;
  readonly typescript: string;
  readonly module?: string;
}

export interface ComponentDocumentation {
  readonly title: string;
  readonly apiNames: readonly string[];
  readonly module: string;
  readonly notes?: readonly string[];
  readonly examples: readonly CodeExample[];
}
