import type { Topic } from "@/lib/types";

// Fictional sample data for the MVP vertical slice. Source names, URLs, and
// article content are invented and not real reporting.
export const sampleTopic: Topic = {
  id: "downtown-bike-lanes",
  title: "City Council Approves Downtown Bike Lane Network",
  articles: [
    {
      id: "article-1",
      topicId: "downtown-bike-lanes",
      sourceName: "Riverside Daily Tribune",
      sourceUrl: "https://example.com/riverside-daily-tribune",
      articleUrl: "https://example.com/riverside-daily-tribune/bike-lanes-approved",
      headline: "Council Greenlights 12-Mile Bike Lane Network Downtown",
      author: "M. Alvarez",
      publishedAt: "2026-06-10",
      excerpt:
        "The city council voted 6-3 Tuesday to approve a 12-mile network of protected bike lanes through downtown, citing safety and emissions goals.",
      content:
        "The city council voted 6-3 Tuesday to approve a 12-mile network of protected bike lanes through downtown, citing safety and emissions goals. Supporters on the council pointed to a 40% rise in cyclist injuries since 2022. The project will be funded through a mix of state transportation grants and a small increase in the vehicle registration fee. Construction is expected to begin in phases starting this fall, with completion targeted for late 2027.",
    },
    {
      id: "article-2",
      topicId: "downtown-bike-lanes",
      sourceName: "Metro Business Journal",
      sourceUrl: "https://example.com/metro-business-journal",
      articleUrl: "https://example.com/metro-business-journal/bike-lane-vote-merchants",
      headline: "Downtown Merchants Warn Bike Lane Plan Will Cost Parking, Sales",
      author: "T. Okafor",
      publishedAt: "2026-06-11",
      excerpt:
        "Business owners along the proposed bike lane corridor say the plan eliminates nearly 300 parking spaces and could hurt foot traffic during construction.",
      content:
        "Business owners along the proposed bike lane corridor say the plan eliminates nearly 300 parking spaces and could hurt foot traffic during construction, which is expected to last 18 months in some blocks. The Downtown Merchants Association estimates a possible 10-15% short-term revenue dip based on similar projects in other cities, though it acknowledges no formal economic study has been done for this specific corridor. The council has not announced a parking mitigation plan.",
    },
    {
      id: "article-3",
      topicId: "downtown-bike-lanes",
      sourceName: "City Beat Network",
      sourceUrl: "https://example.com/city-beat-network",
      articleUrl: "https://example.com/city-beat-network/bike-lanes-safety-data",
      headline: "What the Data Says About Protected Bike Lanes and Safety",
      author: "J. Park",
      publishedAt: "2026-06-12",
      excerpt:
        "Transportation researchers say protected bike lanes generally reduce injuries for all road users, though local results vary by street design.",
      content:
        "Transportation researchers say protected bike lanes generally reduce injuries for all road users, though local results vary by street design and enforcement. A national study cited by city staff found a 30-50% reduction in serious injury crashes on streets with similar lane designs. Some urban planners caution that intersections, not the lanes themselves, remain the highest-risk points and require separate design attention that this proposal does not yet detail.",
    },
    {
      id: "article-4",
      topicId: "downtown-bike-lanes",
      sourceName: "Capitol Edge News",
      sourceUrl: "https://example.com/capitol-edge-news",
      articleUrl: "https://example.com/capitol-edge-news/bike-lane-funding-fight",
      headline: "Bike Lane Funding Plan Sparks Fight Over Vehicle Fees",
      author: "R. Nguyen",
      publishedAt: "2026-06-13",
      excerpt:
        "Council members opposed to the plan argue the vehicle registration fee increase unfairly burdens commuters who have no alternative to driving.",
      content:
        "Council members opposed to the plan argue the vehicle registration fee increase unfairly burdens commuters who have no alternative to driving, particularly from outlying neighborhoods with limited transit access. Proponents counter that the fee is modest, roughly $18 per year, and that the project includes some transit-priority signal upgrades. The three dissenting council members have requested a follow-up study on alternative funding sources before construction contracts are finalized.",
    },
  ],
};
