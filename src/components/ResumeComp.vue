<template lang="">
    <div>
        <h1>Education</h1>
        <div id="skills" v-for="education in educationData()" :key="education.placeOfInstitution">
            <h2>{{education.placeOfInstitution}}</h2>
            
        </div>
        <h1>Work Experience</h1>
        <div id="skills" v-for="workExp in workExpData()" :key="workExp.placeOfWork">
            <h2>{{workExp.placeOfWork}}</h2
                ></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>