require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-icon-action-sheet"
  s.version      = package["version"]
  s.summary      = "Custom Icon ActionSheet"
  s.author       = "Daniel Xavier Araújo"
  s.homepage     = "https://github.com/danielxaraujo/react-native-icon-action-sheet"
  s.license      = "Apache-2.0"
  s.platform     = :ios, "9.0"
  s.source       = { :git => "https://github.com/danielxaraujo/react-native-icon-action-sheet.git", :tag => "v#{s.version}" }
  s.source_files  = "ios/**/*.{h,m,swift}"
  s.dependency "React"
end