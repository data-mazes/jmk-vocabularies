const prefixes = {
  // Add with your prefixes here
  jmk: 'https://jmk.org.pl/vocab#'
}

type LocalPrefixes = typeof prefixes

declare module '@zazuko/rdf-vocabularies/prefixes' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Prefixes extends LocalPrefixes {
  }
}

export default prefixes
