<script setup lang="ts"></script>

<template>
  <div class="flex flex-col text-left text-neutral-300 items-center place-self-center col-span-2 w-3/4">
    <h1 class="text-4xl font-bold">About the Project</h1>
    <p class="text-md mt-4">Interconnect is an open-source initiative aimed at shedding light on the
      critical gaps in mental health services for racialized individuals with disabilities, and those who have
      been impacted by incarceration. This project seeks to provide a platform where affected individuals can safely
      share their stories, connect with others, and build supportive communities. By leveraging collective insights and
      fostering open dialogue, the project aims to improve understanding and advocate for better mental health resources
      tailored
      to the unique needs of these intersectional groups.</p>

    <br />
    <br />

    <h1 class="text-4xl font-bold">Going into the Problem</h1>
    <p class="text-md mt-4">
      This section presents details about the specific problems that the project aims to address in light of the
      issues raised by <i>"It Can't Be Fixed Because It's Not Broken: Racism and Disability in the Prison Industrial
        Complex"</i>
    </p>

    <div class="w-3/4">
      <h3 class="text-xl mt-4">Awareness and Accessibility Gaps</h3>
      <p class="text-md">
        Many Canadians, especially those from marginalized communities, are unaware of the digital and in-person mental
        health resources available to them. Additionally, barriers such as language, transportation, and stigma prevent
        many
        intersectional individuals from accessing and engaging with existing mental health services.
      </p>
      <span class="text-sm">Sources: <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9131389/">NIH</a>&nbsp;<a
          href="https://ccla.org/get-informed/talk-rights/the-state-of-mental-health-in-canada/">CCLA</a></span>
    </div>

    <div class="w-3/4">
      <h3 class="text-xl mt-4">Lack of Culturally-Responsive and Intersectional Approaches</h3>
      <p class="text-md">
        Mental health services and resources often fail to be grounded in the lived experiences and cultural practices
        of diverse communities. Moreover, interventions frequently lack an intersectional perspective that addresses the
        compounded challenges faced by
        individuals with multiple marginalized identities.
      </p>
      <span class="text-sm">Sources: <a
          href="https://liberal.ca/our-platform/a-comprehensive-plan-for-mental-health-care-across-canada/">Liberal.ca</a>&nbsp;<a
          href="https://ccla.org/get-informed/talk-rights/the-state-of-mental-health-in-canada/">CCLA</a></span>
    </div>

    <div class="w-3/4">
      <h3 class="text-xl mt-4">Insufficient Funding and Investment</h3>
      <p class="text-md">
        Despite the critical need, there is a significant gap in dedicated funding and resources for mental health
        services tailored to intersectional groups. The proportion of health spending devoted to mental health in Canada
        remains low, at around 7%, with little progress made in increasing this allocation.
      </p>
      <span class="text-sm">Sources: <a
          href="https://liberal.ca/our-platform/a-comprehensive-plan-for-mental-health-care-across-canada/">Liberal.ca</a>&nbsp;<a
          href="https://ccla.org/get-informed/talk-rights/the-state-of-mental-health-in-canada/">CCLA</a>&nbsp;<a
          href="https://www.canada.ca/en/public-health/news/2023/03/government-of-canada-invests-1-million-to-support-mental-health-through-indus-community-services.html">Canada.ca</a></span>
    </div>

    <div class="w-3/4">
      <h3 class="text-xl mt-4">Lack of intersectional research and data</h3>
      <p class="text-md">
        There is a dearth of comprehensive research and data on the unique mental health needs and barriers faced by
        individuals with overlapping marginalized identities. This lack of evidence-based insights hinders the
        development of appropriate, targeted mental health resources and services.
      </p>
      <span class="text-sm">Sources: <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9131389/">NIH</a>&nbsp;<a
          href="https://ccla.org/get-informed/talk-rights/the-state-of-mental-health-in-canada/">CCLA</a></span>
    </div>

    <br />
    <br />

    <h1 class="text-4xl font-bold">Future Prospects</h1>
    <p class="text-md mt-4"><span class="font-bold">
        Research Data: </span>With explicit permission from the users taken
      at the time of onboarding, the
      large amount of conversation data can later be stripped of personal information and analyzed to better understand
      the underlying issues. This can help to improve the available data and research regarding the mental health
      support infrastructures in Canada.</p>
    <p class="text-md mt-4"><span class="font-bold">
        Further Development: </span>As the project is open-source, other
      developers and researchers interested in improving the platform through various contributions will be able to do
      so. Additionally, being under the GNU GPL-3.0 License this project promotes the open-source software development
      and allows others to create their own versions as long as the source is open-sourced.</p>
  </div>
  <a id="home" class="text-xs" href="/">
    <span class="grid z-10 justify-center place-content-center fixed right-0 m-12 bottom-0 border
      border-gray-600 rounded-full bg-gray-9500 hover:bg-gray-900 h-10 w-10">
      Home</span>
  </a>
</template>

<style scoped>
a {
  color: #3b82f6;
  text-decoration: underline;
}

a#home {
  color: gray;
  text-decoration: none;
  font-size: x-small;
}

h1 {
  text-align: center;
  color: white;
}
</style>
