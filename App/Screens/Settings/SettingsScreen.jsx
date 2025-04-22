import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "../../components/BackButton";

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View>
          <BackButton />
        </View>
        <Text style={styles.sectionTitle}>Preferences</Text>

        <SettingRow
          icon="notifications-outline"
          label="Push Notifications"
          value={notificationsEnabled}
          onToggle={toggleNotifications}
        />

        <SettingRow
          icon="moon-outline"
          label="Dark Mode"
          value={darkMode}
          onToggle={toggleDarkMode}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>

        <SettingAction
          icon="person-outline"
          label="Edit Profile"
          onPress={() => {
            console.log("Navigate to Edit Profile");
          }}
        />

        <SettingAction
          icon="log-out-outline"
          label="Log Out"
          onPress={() => {
            console.log("Log Out User");
          }}
        />
      </View>
    </ScrollView>
  );
};

const SettingRow = ({ icon, label, value, onToggle }) => (
  <View style={styles.row}>
    <View style={styles.rowLeft}>
      <Ionicons name={icon} size={20} color="#333" />
      <Text style={styles.rowText}>{label}</Text>
    </View>
    <Switch value={value} onValueChange={onToggle} />
  </View>
);

const SettingAction = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <View style={styles.rowLeft}>
      <Ionicons name={icon} size={20} color="#333" />
      <Text style={styles.rowText}>{label}</Text>
    </View>
    <Ionicons name="chevron-forward" size={18} color="#999" />
  </TouchableOpacity>
);

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFBD4",
    padding: 20,
  },

  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    fontFamily: "SourceSerif3",
    color: "#444",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowText: {
    marginLeft: 10,
    fontSize: 15,
    fontFamily: "SourceSerif3",
    color: "#333",
  },
});
