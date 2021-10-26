import React from 'react';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const ReactNativeDemo = () => {
  <View
    style={{
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
    }}>
    <Section title="Step One">
      Edit <Text style={styles.highlight}>App.js</Text> to change this
      screen and then come back to see your edits.
    </Section>
    <Section title="See Your Changes">
      <ReloadInstructions />
    </Section>
    <Section title="Debug">
      <DebugInstructions />
    </Section>
    <Section title="Learn More">
      Read the docs to discover what to do next:
    </Section>
    <LearnMoreLinks />
  </View>
}

export default ReactNativeDemo;