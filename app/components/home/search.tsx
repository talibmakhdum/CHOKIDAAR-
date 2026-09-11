import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {
  Search as SearchIcon,
  SlidersHorizontal,
} from 'lucide-react-native';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>

        {/* Filter - Left */}
        <TouchableOpacity
          style={styles.iconButton}
          activeOpacity={0.7}
        >
          <SlidersHorizontal
            size={20}
            color="#5654D9"
            strokeWidth={2.2}
          />
        </TouchableOpacity>

        {/* Search Input */}
        <TextInput
          style={styles.input}
          placeholder="Search projects..."
          placeholderTextColor="#7775A5"
          returnKeyType="search"
        />

        {/* Search - Right */}
        <TouchableOpacity
          style={styles.searchButton}
          activeOpacity={0.7}
        >
          <SearchIcon
            size={20}
            color="#5654D9"
            strokeWidth={2.3}
          />
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
  },

  searchBox: {
    height: 52,

    backgroundColor: '#F1F0FF',

    borderRadius: 30,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 7,

    borderWidth: 1,
    borderColor: '#E1DEFF',
  },

  iconButton: {
    width: 38,
    height: 38,

    borderRadius: 19,

    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    flex: 1,

    fontSize: 15,
    fontWeight: '500',

    color: '#302E70',

    paddingHorizontal: 10,
    paddingVertical: 0,
  },

  searchButton: {
    width: 40,
    height: 40,

    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#E3E1FF',
  },
});