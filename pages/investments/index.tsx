import algoliasearch from "algoliasearch/lite";
import { Hit as AlgoliaHit } from "instantsearch.js";
import React from "react";
import Head from "next/head";

import {
  DynamicWidgets,
  InstantSearch,
  Hits,
  Highlight,
  RefinementList,
  SearchBox,
  Configure,
} from "react-instantsearch";

import { Panel } from "../../components/Panel";
import { Navbar } from "../../components/Navbar";

const client = algoliasearch("E7NPYBCFRS", "9670ae44d9b2a06d3a5c07a7d95e4f20");

type HitProps = {
  hit: AlgoliaHit<{
    name: string;
    description: number;
  }>;
};

function Hit({ hit }: HitProps) {
  return (
    <>
      <Highlight hit={hit} attribute="name" className="Hit-label" />
      <span className="Hit-description">{hit.description}</span>
    </>
  );
}

export default function Investments() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <div className="bg-white">
        <Navbar />
        <InstantSearch searchClient={client} indexName="publications">
          <div className="flex bg-white">
            <div>
              <DynamicWidgets
                fallbackComponent={FallbackComponent}
                facets={["*"]}
              />
            </div>
            <div>
              <SearchBox />
              <Hits hitComponent={Hit} />
              <Configure analytics={false} hitsPerPage={5000} />
            </div>
          </div>
        </InstantSearch>
      </div>
    </>
  );
}

function FallbackComponent({ attribute }: { attribute: string }) {
  return (
    <Panel header={attribute}>
      <RefinementList attribute={attribute} />
    </Panel>
  );
}
