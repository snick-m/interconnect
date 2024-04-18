<script setup lang="ts"></script>

<template>
    <div class="flex flex-col text-left text-neutral-300 items-center place-self-center col-span-2 w-3/4">
        <h1 class="text-4xl font-bold">Alternate Resources</h1>
        <p class="text-md mt-4">
            While this project brings to attention the lack of support resources, there are still some good resources
            easily accessible online to those who need it. Here are some of the resources that can be used by those who
            need help:
        </p>

        <div class="w-3/4">
            <a href="https://www.acrossboundaries.ca/">
                <h3 class="text-xl mt-4">Across Boundaries</h3>
            </a>
            <p class="text-md">
                This organization provides holistic mental health and addiction services for racialized communities,
                including newcomers and refugees with disabilities.
            </p>
        </div>

        <div class="w-3/4">
            <a href="https://hongfook.ca/association/">
                <h3 class="text-xl mt-4">Hong Fook Mental Health Association</h3>
            </a>
            <p class="text-md">
                They offer services to address the mental health concerns of Chinese, Korean, and Vietnamese
                communities, including newcomers, refugees, and individuals with disabilities.
            </p>
        </div>

        <div class="w-3/4">
            <a href="https://wellnesstogether.ca/">
                <h3 class="text-xl mt-4">Wellness Together Canada</h3>
            </a>
            <p class="text-md">
                This government-funded portal offers free online mental health and substance use support, including
                virtual counseling and peer support, with a focus on accessibility and inclusivity.
            </p>
        </div>

        <h3 class="text-xl text-neutral-500 font-semibold mt-4">Location Specific Resources</h3>

        <div class="w-3/4">
            <a href="https://foundrybc.ca/">
                <h3 class="text-xl mt-4">Foundry BC</h3>
            </a>
            <p class="text-md">
                There is a dearth of comprehensive research and data on the unique mental health needs and barriers
                faced by
                individuals with overlapping marginalized identities. This lack of evidence-based insights hinders the
                development of appropriate, targeted mental health resources and services.
            </p>
        </div>

        <div class="w-3/4">
            <a href="https://acsmmontreal.qc.ca/en/mental-health-promotion-through-the-prism-of-intersectionality/">
                <h3 class="text-xl mt-4">ACSM Montreal</h3>
            </a>
            <p class="text-md">
                This organization promotes mental health through an intersectional lens, with a focus on addressing the
                unique needs of marginalized communities, including those with disabilities, in Montreal.
            </p>
        </div>
    </div>
    <RouterLink id="home" class="text-xs" to="/">
        <span class="grid z-10 justify-center place-content-center fixed right-0 m-12 bottom-0 border
      border-gray-600 rounded-full bg-gray-9500 hover:bg-gray-900 h-10 w-10">
            Home</span>
    </RouterLink>
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
