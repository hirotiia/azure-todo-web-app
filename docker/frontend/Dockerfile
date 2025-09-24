FROM node:20-alpine

WORKDIR /app
# 先に package*.json だけコピーして依存解決をキャッシュ
COPY package*.json ./
RUN npm ci || npm install

# 残りのソース
COPY  / ./

ENV HOST=0.0.0.0
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
