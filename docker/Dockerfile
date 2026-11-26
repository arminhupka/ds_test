FROM node:22-bookworm-slim

RUN apt-get update \
 && apt-get install -y --no-install-recommends git ca-certificates curl openssh-client jq perl tmux unzip \
 && rm -rf /var/lib/apt/lists/*

RUN npm install -g @anthropic-ai/claude-code

COPY entrypoint.sh /usr/local/bin/ds-entrypoint
RUN chmod +x /usr/local/bin/ds-entrypoint && mkdir -p /work/repo && chown -R node:node /work

# The login and settings live in /home/node, a per-organization volume.
USER node
ENV HOME=/home/node
WORKDIR /work
ENTRYPOINT ["ds-entrypoint"]
