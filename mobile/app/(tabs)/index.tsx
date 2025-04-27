import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#000', dark: '#000' }} // fundo preto
    headerImage={
      <Image
        source={require('@/assets/images/magnus.png')}
        style={styles.reactLogo}
        resizeMode="cover" // faz a imagem cobrir a área toda
      />
    }
  >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Olá, kkk</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText type="defaultSemiBold">Conta corrente **** 8454</ThemedText>{' '}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Seu saldo disponivel:</ThemedText>
        <ThemedText>
        <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'R$- 65.547.65'
            })}
          </ThemedText>{' '}
        </ThemedText>
      </ThemedView>

      <div style={{ display: 'flex', gap: '10px' }}>
  <button 
    onClick={() => alert('Você clicou!')}
    style={{ 
      width: '80px', 
      height: '80px', 
      borderRadius: '15px', 
      backgroundColor: 'black', 
      color: 'white', 
      border: '2px solid white'
    }}
  >
    Pix
  </button>

  <button 
    onClick={() => alert('Você clicou!')}
    style={{ 
      width: '80px', 
      height: '80px', 
      borderRadius: '15px', 
      backgroundColor: 'black', 
      color: 'white', 
      border: '2px solid white'
    }}
  >
    Extrato
  </button>

  <button 
    onClick={() => alert('Você clicou!')}
    style={{ 
      width: '80px', 
      height: '80px', 
      borderRadius: '15px', 
      backgroundColor: 'black', 
      color: 'white', 
      border: '2px solid white'
    }}
  >
    Cartões
  </button>

  <button 
    onClick={() => alert('Você clicou!')}
    style={{ 
      width: '80px', 
      height: '80px', 
      borderRadius: '15px', 
      backgroundColor: 'black', 
      color: 'white', 
      border: '2px solid white'
    }}
  >
    Recarga
  </button>
</div>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Seu Crédito</ThemedText>
        <ThemedText>R$- 90.546.45</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Você pode:</ThemedText>
        <ThemedText>{' '}
        <ThemedText type="defaultSemiBold">Fazer um emprestimo de 150,000.00</ThemedText>{' '}
          <ThemedText type="defaultSemiBold">com juros de 2% (que fica de 3.000.00 ao mes)</ThemedText>{' '}
        </ThemedText>
        <ThemedText type="defaultSemiBold">Caixinha para depositar (pode resgatar o dinheiro a hora que quiser)</ThemedText>{' '}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
