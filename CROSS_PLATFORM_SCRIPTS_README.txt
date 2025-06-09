# To make npm scripts cross-platform (work on Windows and Linux):
# 1. Install these dev dependencies:
#    npm install --save-dev cross-env cross-env-shell shx
#
# 2. Use cross-env-shell for scripts that call .sh files or need shell features.
# 3. Use shx for file operations (rm, cp, etc.)
# 4. Avoid using 'bash' directly in npm scripts.
#
# Example changes below are applied to your package.json scripts.
