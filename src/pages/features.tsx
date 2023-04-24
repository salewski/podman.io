import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import { Icon } from '@iconify/react';
/* COMPONENTS */
import Markdown from '@site/src/components/utilities/Markdown';
import PageHeader from '@site/src/components/layout/PageHeader';
import SectionHeader from '@site/src/components/layout/SectionHeader';
import ColoringBookSection from '@site/src/components/content/ColoringBookSection';
import ArticleCard from '@site/src/components/ui/ArticleCard';
import FeaturesCarousel from '@site/src/components/content/FeaturesCarousel';
/* PAGE DATA */
import newsLocal from '@site/static/data/newsLocal';
import { header, knowPodman, learnMore } from '@site/static/data/features';

/* PAGE COMPONENTS */
function GetToKnowPodmanSection() {
  return (
    <section className="mb-8 mt-4 lg:mt-8 xl:mb-12">
      <SectionHeader title={knowPodman.title} />
      <div className="container flex flex-wrap justify-center gap-4 lg:gap-8">
        {knowPodman.cards.map((card, index) => {
          return (
            <article key={index} className="mt-2 flex flex-col justify-start rounded-md p-4 text-center lg:mt-4">
              <div>
                <h3 className="mb-4 font-medium dark:text-blue-500 xl:mb-6">{card.title}</h3>
                <Markdown text={card.description} styles="max-w-xs" />
              </div>
              <img src={card.image.path} alt={card.image.alt} className="order-first my-2 h-52 w-auto object-contain" />
            </article>
          );
        })}
      </div>
    </section>
  );
}

const LearnArticles = () => {
  return (
    <section>
      <header className="container mb-4 text-center lg:mb-8 lg:text-start">
        <h3 className="font-medium text-blue-700 dark:text-blue-500">{learnMore.blogPosts.title}</h3>
      </header>
      <div>
        {newsLocal.map((card, index) => {
          return <ArticleCard {...card} altLayout={true} key={index} />;
        })}
      </div>
    </section>
  );
};

const LearnResources = () => {
  return (
    <section>
      <header className="container mb-4 text-center lg:text-start xl:mb-8">
        <h3 className="font-medium text-blue-700 dark:text-blue-500">{learnMore.resources.title}</h3>
      </header>
      <div>
        <ul className="container mb-12 mt-4 flex flex-col gap-4 lg:mb-16 lg:mt-8">
          {learnMore.resources.cards.map((card, index) => {
            return (
              <li key={index}>
                <a
                  href={card.path}
                  className="mx-auto flex max-w-lg items-center gap-4 rounded-md bg-gray-100 p-4 text-purple-700 underline-offset-4 transition duration-150 ease-linear hover:bg-purple-700 hover:text-purple-50 hover:shadow-md dark:bg-gray-700 dark:hover:bg-purple-900 dark:hover:text-white">
                  <span>{card.text}</span>
                  <Icon icon={card.icon} className="order-first" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

const LearnMoreSection = () => {
  return (
    <section>
      <SectionHeader title={learnMore.title} textGradient={true} textGradientStops="from-purple-500 to-purple-900" />
      <div className="container grid gap-4 lg:grid-cols-2">
        <LearnArticles />
        <LearnResources />
      </div>
    </section>
  );
};

function Features() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        'https://blog.podman.io/wp-json/wp/v2/posts?_embed_fields=id,author,date,featured_media,excerpt,link',
      );
      const json = data.json();
      console.log(json);
    };
    fetchData().catch(console.error);
  }, []);
  return (
    <Layout>
      <PageHeader title={header.title} description={header.subtitle} />
      <GetToKnowPodmanSection />
      <FeaturesCarousel />
      <LearnMoreSection />
      <ColoringBookSection />
    </Layout>
  );
}

export default Features;