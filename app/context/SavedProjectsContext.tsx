import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

type SavedProjectsContextType = {
  savedProjects: number[];
  toggleSaveProject: (projectId: number) => void;
  isProjectSaved: (projectId: number) => boolean;
};

const SavedProjectsContext =
  createContext<SavedProjectsContextType | undefined>(
    undefined,
  );

type SavedProjectsProviderProps = {
  children: ReactNode;
};

const STORAGE_KEY = 'NETRA_SAVED_PROJECTS';

export const SavedProjectsProvider = ({
  children,
}: SavedProjectsProviderProps) => {
  const [savedProjects, setSavedProjects] = useState<number[]>([]);

  const [loaded, setLoaded] = useState(false);

  // Load saved project IDs when app starts
  useEffect(() => {
    const loadSavedProjects = async () => {
      try {
        const storedProjects =
          await AsyncStorage.getItem(STORAGE_KEY);

        if (storedProjects) {
          setSavedProjects(
            JSON.parse(storedProjects),
          );
        }
      } catch (error) {
        console.log(
          'Error loading saved projects:',
          error,
        );
      } finally {
        setLoaded(true);
      }
    };

    loadSavedProjects();
  }, []);

  // Save / remove project
  const toggleSaveProject = async (
    projectId: number,
  ) => {
    setSavedProjects(currentProjects => {
      let updatedProjects: number[];

      if (currentProjects.includes(projectId)) {
        // Remove project
        updatedProjects =
          currentProjects.filter(
            id => id !== projectId,
          );
      } else {
        // Add project
        updatedProjects = [
          ...currentProjects,
          projectId,
        ];
      }

      // Store IDs in mobile storage
      AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedProjects),
      ).catch(error => {
        console.log(
          'Error saving projects:',
          error,
        );
      });

      return updatedProjects;
    });
  };

  const isProjectSaved = (projectId: number) => {
    return savedProjects.includes(projectId);
  };

  // Wait until AsyncStorage is loaded
  if (!loaded) {
    return null;
  }

  return (
    <SavedProjectsContext.Provider
      value={{
        savedProjects,
        toggleSaveProject,
        isProjectSaved,
      }}>
      {children}
    </SavedProjectsContext.Provider>
  );
};

export const useSavedProjects = () => {
  const context = useContext(
    SavedProjectsContext,
  );

  if (!context) {
    throw new Error(
      'useSavedProjects must be used inside SavedProjectsProvider',
    );
  }

  return context;
};