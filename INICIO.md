# 🚀 Guia de Início Rápido - React Native

**Professor:** Jackson Sá  
**Instituição:** ETEC Bento Quirino - Campinas/SP  
**Curso:** Desenvolvimento Mobile com React Native

---

## 🎯 **Bem-vindo ao Curso!**

Este guia irá ajudá-lo a configurar seu ambiente de desenvolvimento e começar sua jornada no desenvolvimento mobile com React Native. Siga os passos abaixo para ter tudo funcionando em poucos minutos.

## ⚡ **Configuração Rápida (5 minutos)**

### **1. Pré-requisitos**

Antes de começar, certifique-se de ter instalado:

- ✅ **Node.js 16+** - [Download](https://nodejs.org/)
- ✅ **Git** - [Download](https://git-scm.com/)
- ✅ **Expo CLI** - Instale com: `npm install -g @expo/cli`

### **2. Clone e Configure**

```bash
# Clone o repositório
git clone [url-do-repositorio]
cd react-native

# Instale as dependências
npm install

# Inicie o projeto
npm start
```

### **3. Teste no Dispositivo**

1. **📱 Instale o Expo Go** no seu celular:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **📷 Escaneie o QR Code** que aparece no terminal

3. **🎉 Sua app está rodando!**

## 📱 **Primeiros Passos**

### **Estrutura do Projeto**

```
react-native/
├── 📁 modulo-01-fundamentos-react/     # Fundamentos do React
├── 📁 modulo-02-hello-world/           # Primeira aplicação
├── 📁 modulo-03-flux-redux/            # Gerenciamento de estado
├── 📁 modulo-04-interface-usuario/     # UI/UX
├── 📁 modulo-05-capacidades-dispositivo/ # Recursos nativos
├── 📁 modulo-06-comunicacao-servidores/  # APIs e backend
├── 📁 modulo-07-native-bridging/       # Módulos nativos
├── 📁 modulo-08-testes/                # Testes
├── 📁 modulo-09-producao/              # Deploy
├── 📁 modulo-10-ecossistema/           # Ecossistema
├── 📄 README.md                        # Documentação principal
├── 📄 TUTORIAIS.md                     # Tutoriais estruturados
└── 📄 package.json                     # Dependências
```

### **Comandos Essenciais**

```bash
# Iniciar o projeto
npm start

# Executar em iOS
npm run ios

# Executar em Android
npm run android

# Executar testes
npm test

# Build para produção
npm run build
```

## 🎓 **Sequência de Aprendizado**

### **Semana 1-2: Fundamentos**
- ✅ [Módulo 1: Fundamentos do React](./modulo-01-fundamentos-react/README.md)
- ✅ [Módulo 2: Hello World](./modulo-02-hello-world/README.md)

### **Semana 3-4: Estado e UI**
- ✅ [Módulo 3: Flux e Redux](./modulo-03-flux-redux/README.md)
- ✅ [Módulo 4: Interface do Usuário](./modulo-04-interface-usuario/README.md)

### **Semana 5-6: Recursos Nativos**
- ✅ [Módulo 5: Capacidades do Dispositivo](./modulo-05-capacidades-dispositivo/README.md)
- ✅ [Módulo 6: Comunicação com Servidores](./modulo-06-comunicacao-servidores/README.md)

### **Semana 7-8: Avançado**
- ✅ [Módulo 7: Native Bridging](./modulo-07-native-bridging/README.md)
- ✅ [Módulo 8: Testes](./modulo-08-testes/README.md)

### **Semana 9-10: Produção**
- ✅ [Módulo 9: Produção](./modulo-09-producao/README.md)
- ✅ [Módulo 10: Ecossistema](./modulo-10-ecossistema/README.md)

## 🛠️ **Configuração Detalhada**

### **Ambiente de Desenvolvimento**

#### **Para iOS (macOS obrigatório)**
```bash
# Instale Xcode
# Baixe na App Store

# Instale CocoaPods
sudo gem install cocoapods

# Configure o projeto iOS
cd ios && pod install && cd ..
```

#### **Para Android**
```bash
# Instale Android Studio
# Configure ANDROID_HOME
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### **Ferramentas Recomendadas**

- **📝 Editor**: [VS Code](https://code.visualstudio.com/) + Extensões React Native
- **📱 Emulador**: Android Studio (Android) + Xcode (iOS)
- **🔧 Debugger**: [Flipper](https://fbflipper.com/)
- **📊 Analytics**: [Expo Analytics](https://docs.expo.dev/guides/analytics/)

## 📚 **Recursos de Aprendizado**

### **Documentação Oficial**
- [React Native Docs](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Documentation](https://react.dev/)

### **Tutoriais Interativos**
- [Expo Learning](https://docs.expo.dev/tutorial/introduction/)
- [React Native School](https://reactnativeschool.com/)
- [React Native Express](http://www.reactnativeexpress.com/)

### **Comunidade**
- [React Native Community](https://github.com/react-native-community)
- [Expo Discord](https://discord.gg/expo)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/react-native)

## 🎯 **Primeiro Projeto**

### **App de Contador**

Vamos criar sua primeira aplicação React Native:

```javascript
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Primeiro App!</Text>
      <Text style={styles.counter}>{count}</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.buttonText}>Incrementar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
```

### **Como Testar**

1. **📱 Salve o código** em `App.js`
2. **🔄 Recarregue** a aplicação no seu dispositivo
3. **👆 Toque no botão** para incrementar o contador
4. **🎉 Funcionou!** Você criou sua primeira app React Native

## 🚨 **Solução de Problemas**

### **Problemas Comuns**

#### **"Metro bundler não inicia"**
```bash
# Limpe o cache
npx expo start --clear

# Reinstale dependências
rm -rf node_modules
npm install
```

#### **"App não carrega no dispositivo"**
- ✅ Verifique se está na mesma rede WiFi
- ✅ Reinicie o Expo Go no dispositivo
- ✅ Reinicie o servidor de desenvolvimento

#### **"Erro de build"**
```bash
# Limpe o cache do Expo
expo r -c

# Reinstale dependências nativas
cd ios && pod install && cd ..
```

#### **"Dependências não encontradas"**
```bash
# Instale dependências
npm install

# Para dependências nativas
npx expo install [nome-do-pacote]
```

### **Comandos de Diagnóstico**

```bash
# Verificar versões
node --version
npm --version
expo --version

# Verificar configuração
expo doctor

# Logs detalhados
expo start --verbose
```

## 📊 **Progresso e Metas**

### **Checklist Semanal**

- ✅ **Segunda-feira**: Leia a teoria do módulo
- ✅ **Terça-feira**: Implemente os exemplos
- ✅ **Quarta-feira**: Faça os exercícios
- ✅ **Quinta-feira**: Desenvolva o projeto prático
- ✅ **Sexta-feira**: Teste e documente

### **Metas por Módulo**

- ✅ **Módulo 1**: Entender componentes React
- ✅ **Módulo 2**: Criar primeira aplicação
- ✅ **Módulo 3**: Implementar Redux
- ✅ **Módulo 4**: Desenvolver UI responsiva
- ✅ **Módulo 5**: Integrar recursos nativos
- ✅ **Módulo 6**: Conectar com APIs
- ✅ **Módulo 7**: Criar módulos customizados
- ✅ **Módulo 8**: Implementar testes
- ✅ **Módulo 9**: Publicar aplicação
- ✅ **Módulo 10**: Dominar ecossistema

## 🎓 **Próximos Passos**

### **1. Comece Agora**
- 📖 Leia o [README Principal](./README.md)
- 📚 Siga os [Tutoriais](./TUTORIAIS.md)
- 🚀 Comece pelo [Módulo 1](./modulo-01-fundamentos-react/README.md)

### **2. Pratique Diariamente**
- 💻 Code todos os dias
- 🧪 Execute os testes
- 📱 Teste no dispositivo real
- 📝 Documente seu progresso

### **3. Participe da Comunidade**
- 💬 Discord: Comunidade de estudantes
- 📧 Email: suporte@etec.com.br
- 📱 WhatsApp: Grupo de estudos
- 🌐 Fórum: Perguntas e respostas

## 🔗 **Links Úteis**

- 🏠 **[README Principal](./README.md)** - Visão geral do curso
- 📚 **[Guia de Tutoriais](./TUTORIAIS.md)** - Tutoriais estruturados
- 🚀 **[Módulo 1: Fundamentos](./modulo-01-fundamentos/README.md)** - Comece aqui
- 📱 **[Módulo 2: Hello World](./modulo-02-hello-world/README.md)** - Primeira app
- 🔄 **[Módulo 3: Flux e Redux](./modulo-03-flux-redux/README.md)** - Gerenciamento de estado

---

**Bem-vindo ao desenvolvimento mobile! Vamos criar aplicações incríveis juntos! 🚀📱**

_ETEC Bento Quirino - Curso Completo de React Native_