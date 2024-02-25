import algoliasearch from "algoliasearch/lite";
import { Hit as AlgoliaHit } from "instantsearch.js";
import React from "react";
import Head from "next/head";
import Link from "next/link";

import {
  DynamicWidgets,
  InstantSearch,
  Hits,
  Highlight,
  RefinementList,
  SearchBox,
  Configure,
  Pagination,
} from "react-instantsearch";

import { Panel } from "../../components/Panel";
import { Navbar } from "../../components/Navbar";

const client = algoliasearch("E7NPYBCFRS", "9670ae44d9b2a06d3a5c07a7d95e4f20");

type HitProps = {
  hit: AlgoliaHit<{
    name: string;
    company: string;
    round: string;
    investors: Array<string>;
    amount: string;
    url: string;
    type: string;
  }>;
};

function Hit({ hit }: HitProps) {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-lg font-bold">
          <Highlight hit={hit} attribute="name" className="Hit-label" />
        </h2>
        <div className="flex flex-row justify-between items-center">
          <span className="text-lg font-bold">
            <Link
              href={hit.url}
              rel="noopener noreferrer"
              target="_blank"
              className=" text-blue-600 "
            >
              {hit.company}
            </Link>
            ({hit.type})
          </span>
        </div>
        <div className=""></div>
        <div className="flex flex-row font-semibold">
          <span className="mr-4">💰 Amount: {hit.amount}</span>
          <span className="mr-4">📈 Round: {hit.round}</span>
          <span>💼 Investors: {hit.investors.join(",")}</span>
        </div>
      </div>
    </>
  );
}

export default function Investments() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <div className="">
        <Navbar />
        <InstantSearch searchClient={client} indexName="publications">
          <div className="flex flex-col sm:flex-row sm:justify-between py-4 px-6 shadow items-baseline w-full">
            <div className="w-full sm:w-1/6 mb-4 sm:mb-0 hidden lg:block md:block">
              {/* Set a fixed width for the left container */}
              <DynamicWidgets
                fallbackComponent={FallbackComponent}
                facets={["*"]}
              />
            </div>
            <div className="w-full sm:w-full ">
              {/* Set a fixed width for the right container */}
              <div className="w-full sm:w-auto mb-4">
                <SearchBox className="w-full" />
              </div>
              <div className="w-full sm:w-auto">
                <Hits hitComponent={Hit} />
              </div>
              <Configure analytics={false} hitsPerPage={15} />
              <Pagination />
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
